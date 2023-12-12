import { useParams } from 'react-router-dom';
import BookmarkButton from '../../components/BookmarkButton/BookMarkButton';
import moviesJSON from '../../data/movies.json';
import placeholder from '../../img/placeholder.jpg';
import iMovie from '../../types/iMovie';
import styles from './FilmView.module.css';

export default function FilmView() {
  const { slug } = useParams<{ slug: string }>();
  const data = moviesJSON.find((film: iMovie) => film.slug === slug);

  return data ? (
    <div className={`section nav-padding ${styles.section}`}>
      <div className={styles.vertPos}>
        <div className={`${styles.block} ${styles.imageContainer}`}>
          <img
            src={data.thumbnail}
            alt={'Movie cover image'}
            className={styles.image}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = placeholder;
            }}
          />
        </div>
        <div className={`${styles.block} ${styles.textContainer}`}>
          <div className={styles.textBlock}>
            <h2>
              {data.title}
              <span className={`${styles.year} ${styles.gapLeft}`}>
                {data.year}
              </span>
            </h2>
            <p>{data.actors.join(', ')}</p>
            <p className={styles.ratingGenre}>
              <span>{`Rating ${data.rating}`}</span>
              <span className={styles.gapLeft}>{data.genre}</span>
            </p>
            <p className={styles.synopsis}>{data.synopsis}</p>
          </div>
          <BookmarkButton movieId={data.id} size='large' />
        </div>
      </div>
    </div>
  ) : (
    <h2>No movie found</h2>
  );
}
