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

function MovieCarousel({ movie, mode }: MovieCarouselProps) {
  // Filtering movies based on the mode
  const moviesToDisplay =
    mode === 'trend'
      ? movie.filter(movie => movie.isTrending)
      : movie.filter(movie => !movie.isTrending);

  // Rendering the component
  return (
    <div className={classes.carouselContainer}>
      <h1>{mode === 'rec' ? 'Recommended Movies' : 'Trending Movies'}</h1>
      <Carousel
        classNames={classes}
        slideSize={{ base: '100%', sm: '15%', md: '20%', lg: '15%', xl: '15%' }}
        align='start'
        slideGap='sm'
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
        {/* Mapping through the movies and creating a Carousel.Slide for each */}
        {moviesToDisplay.map((movie, index) => (
          <Carousel.Slide key={index}>
            <Thumbnail movie={movie} mode={mode} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;