import { useParams } from 'react-router-dom';
import moviesJSON from '../../data/movies.json';
import placeholder from '../../img/placeholder.jpg';
import iMovie from '../../types/iMovie';
import styles from './FilmView.module.css';

export default function FilmView() {
  const { slug } = useParams<{ slug: string }>();

  // Vi behöver inte spara datan i ett state. Det räcker att göra det i en variabel då det ställde till
  // med att navigera till rätt film utifrån modalen. Navigationen fungerade men statet ändrades aldrig.

  // const [data, setData] = useState<iMovie | undefined>(
  //   moviesJSON.find((film: iMovie) => film.slug === slug)
  // );
  const data = moviesJSON.find((film: iMovie) => film.slug === slug);

  return data ? (
    <div className={`section nav-padding ${styles.section}`}>
      <div className={styles.vertPos}>
        <div className={`${styles.block} ${styles.imageContainer}`}>
          <img
            src={data.thumbnail}
            alt={'Movie cover image'}
            className={styles.image}
            // onError={() =>
            //   setData(prev =>
            //     prev ? { ...prev, thumbnail: placeholder } : undefined
            //   )
            // }
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
            {/* TODO: Insert bookmark button here*/}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2>No movie found</h2>
  );
}
