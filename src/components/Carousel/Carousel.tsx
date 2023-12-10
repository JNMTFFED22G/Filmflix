import { Carousel } from '@mantine/carousel';
// import { 'fa-arrow-circle-right' as arrowright } from  '@fortawesome/free-regular-svg-icons';
import iMovie from '../../types/iMovie';
import Thumbnail from '../Thumbnail/Thumbnail';
import classes from  './Carousel.module.css';

interface MovieCarouselProps {
  movie: iMovie[];
  mode: 'rec' | 'trend';
}



// Todo
// More tests need to be written once implemented in the app
// Add some styling to the carousel, maybe some hover effects?
// Fix Icons for controllers

function MovieCarousel({ movie, mode }: MovieCarouselProps) {
  const moviesToDisplay = mode === 'trend' ? movie.filter(movie => movie.isTrending) : movie;
  // if modes is rec display "recomended movies" else Trending movies in the H1




  console.log(movie)
  return (
    <div className={classes.carouselContainer}>
      <h1>{mode === 'rec' ? 'Recommended Movies' : 'Trending Movies'}</h1>
      <Carousel
        slideSize={{ base: '60%', sm: '30%', md: '20%' }}
        align='start'
        slideGap='sm'
        controlsOffset='sm'
        slidesToScroll={2}
        loop
        // nextControlIcon={<filledHeart style={{ width: rem(16), height: rem(16) }} />}
        // previousControlIcon={<FaChevronLeft style={{ width: rem(24), height: rem(24) }} />}
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
