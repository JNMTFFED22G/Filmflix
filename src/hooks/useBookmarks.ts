import { useSessionStorage } from '@mantine/hooks';

export default function useBookmarks(): [
  number[],
  (value: number[] | ((prev: number[]) => number[]) | number[]) => void,
] {
  const [bookmarks, setBookmarks] = useSessionStorage<number[]>({
    key: 'bookmarks',
    defaultValue: [],
  });

  return [bookmarks, setBookmarks];
}
