import { useEffect, useState } from 'react';

export default function useBookmark() {
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem('bookmarks') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return [bookmarks, setBookmarks];
}
