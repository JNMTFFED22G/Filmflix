import MovieCaruosel from '../../components/Carousel/Carousel';
import movies from '../../data/movies.json';

export default function HomePage() {
  return (
    <div className='nav-padding'>
      <MovieCaruosel movie={movies} mode='trend' />
      <MovieCaruosel movie={movies} mode='rec' />
    </div>
  );
}
