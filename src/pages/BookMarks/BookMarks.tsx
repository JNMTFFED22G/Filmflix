import Thumbnail from '../../components/Thumbnail/Thumbnail';
import movies from '../../data/movies.json';
import useBookmarks from '../../hooks/useBookmarks';
import './BookMarks.css';

export default function BookMarks() {
  const [bookmarkedMovies] = useBookmarks();

  const bookmarkedMoviesToRender = movies.filter(movie =>
    bookmarkedMovies.includes(movie.id)
  );

  return (
    <div className='bookmark-container'>
      <h1>Bookmarks</h1>
      <div className='bookmark-grid'>
        {bookmarkedMoviesToRender.map((movie, index) => (
          <Thumbnail movie={movie} mode='rec' key={index} />
        ))}
      </div>
    </div>
  );
}
