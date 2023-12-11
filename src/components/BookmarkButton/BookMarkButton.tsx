import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './BookmarkButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import useBookmarks from '../../hooks/useBookmarks';

interface Props {
  movieId: number;
  size: 'small' | 'large';
}

export default function BookmarkButton({ movieId, size }: Props) {
  const [bookmarks, setBookmarks] = useBookmarks();

  const bookmarked = useMemo(
    () => bookmarks.includes(movieId),
    [bookmarks, movieId]
  );

  return (
    <FontAwesomeIcon
      className={`${styles.icon} ${styles[size]}`}
      icon={bookmarked ? filledHeart : emptyHeart}
      onClick={() =>
        bookmarked
          ? setBookmarks(bookmarks.filter(id => id !== movieId))
          : setBookmarks([...bookmarks, movieId])
      }
    />
  );
}
