import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from '@mantine/carousel';
import iMovie from '../../types/iMovie';
import Thumbnail from '../Thumbnail/Thumbnail';
import classes from './Carousel.module.css';

interface MovieCarouselProps {
  movie: iMovie[];
  mode: 'rec' | 'trend';
}

// Todo
// More tests need to be written once implemented in the app
// Add some styling to the carousel, maybe some hover effects?

function MovieCarousel({ movie, mode }: MovieCarouselProps) {
  const moviesToDisplay =
    mode === 'trend' ? movie.filter(movie => movie.isTrending) : movie.filter(movie => !movie.isTrending);

  console.log(movie);
  return (
    <div className={classes.carouselContainer}>
      <h1>{mode === 'rec' ? 'Recommended Movies' : 'Trending Movies'}</h1>
      <Carousel classNames={classes}
        slideSize={{ base: '60%', sm: '30%', md: '20%' }}
        align='start'
        slideGap='sm'
        controlsOffset=''
        slidesToScroll={3}
        loop
        nextControlIcon={
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className={classes.arrowIcon}
          />
        }
        previousControlIcon={
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className={classes.arrowIcon}
          />
        }
      >
        {moviesToDisplay.map((movie, index) => (
          <Carousel.Slide key={index}>
            <Thumbnail movie={movie} mode={mode} />
          </Carousel.Slide>
        ))}
        ;
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
