// import Thumbnail from '../../components/Thumbnail/Thumbnail';
import MovieCaruosel from '../../components/Carousel/Carousel';
import movies from '../../data/movies.json';

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <MovieCaruosel movie={movies} mode='rec' />

      {/* {movies.map((movie, index) => (
        <Thumbnail movie={movie} mode='rec' key={index} />
      ))} */}
    </div>
  );
}
