import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from '@mantine/carousel';
import iMovie from '../../types/iMovie';
import Thumbnail from '../Thumbnail/Thumbnail';
import classes from './Carousel.module.css';
import { useEffect, useState } from 'react';

interface MovieCarouselProps {
  movie: iMovie[];
  mode: 'rec' | 'trend';
}

function MovieCarousel({ movie, mode }: MovieCarouselProps) {
  // State for the shuffled movies
  const [shuffledMovies, setShuffledMovies] = useState<iMovie[]>([]);

  useEffect(() => {
    const moviesToDisplay =
      mode === 'trend'
        ? movie.filter(movie => movie.isTrending)
        : movie.filter(movie => !movie.isTrending);

    // Shuffle the movies
    for (let i = moviesToDisplay.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [moviesToDisplay[i], moviesToDisplay[j]] = [
        moviesToDisplay[j],
        moviesToDisplay[i],
      ];
    }

    setShuffledMovies(moviesToDisplay);
  }, [movie, mode]);

  // Rendering the component
  return (
    <div className={classes.carouselContainer}>
      <h1>{mode === 'rec' ? 'Recommended Movies' : 'Trending Movies'}</h1>
      <Carousel
        classNames={classes}
        slideSize={{ base: '100%', sm: '15%', md: '20%', lg: '20%', xl: '20%' }}
        align='start'
        slideGap='md'
        slidesToScroll={3}
        loop
        nextControlIcon={
          <FontAwesomeIcon
            aria-label='Next slide'
            icon={faArrowCircleRight}
            className={classes.arrowIcon}
          />
        }
        previousControlIcon={
          <FontAwesomeIcon
            aria-label='Previous slide'
            icon={faArrowCircleLeft}
            className={classes.arrowIcon}
          />
        }
      >
        {/* Mapping through the movies and creating a Carousel.Slide for each */}
        {shuffledMovies.map((movie, index) => (
          <Carousel.Slide key={index}>
            <Thumbnail movie={movie} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
