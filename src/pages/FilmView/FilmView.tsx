import styles from './FilmView.module.css';

import { useParams } from 'react-router-dom';
import moviesJSON from '../../data/movies.json';
import iMovie from '../../types/iMovie';

export default function FilmView() {
  const { slug } = useParams<{ slug: string }>();

  const movie = moviesJSON.find((film: iMovie) => film.slug === slug);

  if (!movie) {
    return <div className='section'>404</div>;
  }

  const { title, year, rating, actors, genre, synopsis, thumbnail } = movie;

  return (
    <div className={`section ${styles.section}`}>
      <div className={styles.vertPos}>
        <div className={`${styles.block} ${styles.imageContainer}`}>
          <img src={thumbnail} />
        </div>
        <div className={`${styles.block} ${styles.textContainer}`}>
          <div className={styles.textBlock}>
            <h2>
              {title}
              <span className={`${styles.year} ${styles.gapLeft}`}>{year}</span>
            </h2>
            <p>{actors.join(', ')}</p>
            <p className={styles.ratingGenre}>
              <span>{`Rating ${rating}`}</span>
              <span className={styles.gapLeft}>{genre}</span>
            </p>
            <p className={styles.synopsis}>{synopsis}</p>
            {/* TODO: Insert bookmark button here*/}
          </div>
        </div>
      </div>
    </div>
  );
}
