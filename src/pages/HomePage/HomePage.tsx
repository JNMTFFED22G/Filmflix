import MovieCaruosel from '../../components/Carousel/Carousel';
import HeroSection from '../../components/HeroSection/HeroSection';
import movies from '../../data/movies.json';
import classes from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className={classes.mainContainer}>
        <MovieCaruosel movie={movies} mode='trend' />
        <MovieCaruosel movie={movies} mode='rec' />
      </div>
    </>
  );
}
