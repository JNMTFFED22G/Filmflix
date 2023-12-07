import styles from './FilmView.module.css';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesJSON from '../../data/movies.json';
import placeholder from '../../img/placeholder.jpg';
import iMovie from '../../types/iMovie';

export default function FilmView() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<iMovie | undefined>(
    moviesJSON.find((film: iMovie) => film.slug === slug)
  );

  return data ? (
    <div className={`section nav-padding ${styles.section}`}>
      <div className={styles.vertPos}>
        <div className={`${styles.block} ${styles.imageContainer}`}>
          <img
            src={data.thumbnail}
            alt={'Movie cover image'}
            onError={() =>
              setData(prev =>
                prev ? { ...prev, thumbnail: placeholder } : undefined
              )
            }
            className={styles.image}
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
            {/* TODO: Insert bookmark button here*/}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2>No movie found</h2>
  );
}
