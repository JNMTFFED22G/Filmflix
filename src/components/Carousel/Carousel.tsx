import { Carousel } from '@mantine/carousel';
import iMovie from '../../types/iMovie';
import Thumbnail from '../Thumbnail/Thumbnail';
import { StyledMovieCarousel } from './Carousel.Style';
import './Carousel.module.css';

interface MovieCarouselProps {
  movie: iMovie[];
  mode: 'rec' | 'trend';
}

function MovieCarousel({ movie, mode }: MovieCarouselProps) {
  return (
    <StyledMovieCarousel aria-label='Movie carousel'>
      <Carousel
        slideSize={{ base: '60%', sm: '30%', md: '20%' }}
        align='start'
        slideGap='lg'
        controlsOffset='sm'
        slidesToScroll={4}
        loop
      >
        {movie.map((movie, index) => (
          <Carousel.Slide key={index}>
            <Thumbnail movie={movie} mode={mode} />
          </Carousel.Slide>
        ))}
        ;
      </Carousel>
    </StyledMovieCarousel>
  );
}

export default MovieCarousel;
