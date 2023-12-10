import { Carousel } from '@mantine/carousel';
import { 'fa-arrow-circle-right' as arrowright } from  '@fortawesome/free-regular-svg-icons';
import iMovie from '../../types/iMovie';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Carousel.module.css';
import { rem } from '@mantine/core';

interface MovieCarouselProps {
  movie: iMovie[];
  mode: 'rec' | 'trend';
}

// Todo
// More tests need to be written once implemented in the app
// Add some styling to the carousel, maybe some hover effects?
// Fix Icons for controllers

function MovieCarousel({ movie, mode }: MovieCarouselProps) {
  return (
    <div className='carousel-container'>
      <Carousel
        slideSize={{ base: '60%', sm: '30%', md: '20%' }}
        align='start'
        slideGap='lg'
        controlsOffset='sm'
        slidesToScroll={2}
        loop
        // nextControlIcon={<filledHeart style={{ width: rem(16), height: rem(16) }} />}
        // previousControlIcon={<FaChevronLeft style={{ width: rem(24), height: rem(24) }} />}
      >
        {movie.map((movie, index) => (
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
