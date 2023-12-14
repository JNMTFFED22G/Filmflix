import MovieCaruosel from '../../components/Carousel/Carousel';
import HeroSection from '../../components/HeroSection/HeroSection';
import movies from '../../data/movies.json';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className='nav-padding'>
        <h1>HomePage</h1>

        <MovieCaruosel movie={movies} mode='trend' />
        <MovieCaruosel movie={movies} mode='rec' />
      </div>
    </>
  );
}
