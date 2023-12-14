import MovieCaruosel from '../../components/Carousel/Carousel';
import HeroSection from '../../components/HeroSection/HeroSection';
import movies from '../../data/movies.json';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div>
        <MovieCaruosel movie={movies} mode='trend' />
        <MovieCaruosel movie={movies} mode='rec' />
      </div>
    </>
  );
}
