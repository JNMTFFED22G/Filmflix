import { Carousel } from '@mantine/carousel';
import iMovie from '../../types/iMovie';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Carousel.module.css';
interface MovieCarouselProps {
  movie: iMovie[];
  mode: 'rec' | 'trend';
}

function MovieCarousel({ movie, mode }: MovieCarouselProps) {
  //   const slides = movie.map((movie, index) => (
  //     <Carousel.Slide key={index}>
  //       <Thumbnail movie={movie} mode={mode} />
  //     </Carousel.Slide>
  //   ));

  return (
    // <div className='carousel-container'>
    <Carousel
      slideSize={{ base: '60%', sm: '30%', md: '16%' }}
      align='start'
      slideGap='sm'
      controlsOffset='xs'
      orientation='horizontal'
      slidesToScroll={2}
      loop
    >
      {movie.map((movie, index) => (
        <Carousel.Slide key={index}>
          <Thumbnail movie={movie} mode={mode} />
        </Carousel.Slide>
      ))}
    </Carousel>
    // </div>
  );
}

export default MovieCarousel;
