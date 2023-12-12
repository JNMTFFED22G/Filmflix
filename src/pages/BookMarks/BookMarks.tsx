import Thumbnail from '../../components/Thumbnail/Thumbnail';
import movies from '../../data/movies.json';
import useBookmarks from '../../hooks/useBookmarks';
import './BookMarks.css';

export default function BookMarks() {
  const [bookmarkedMovies] = useBookmarks();

  const bookmarkedMoviesToRender = movies.filter(movie =>
    bookmarkedMovies.includes(movie.id)
  );

  const mountedStyle = { animation: 'inAnimation 250ms ease-in' };

  return (
    <div style={mountedStyle} className='bookmark-container'>
      <h1>Bookmarks</h1>
      {bookmarkedMovies.length === 0 ? (
        <div>
          <p>No bookmarked movies</p>
        </div>
      ) : (
        <>
          <div style={mountedStyle} className='bookmark-grid'>
            {bookmarkedMoviesToRender.map((movie, index) => (
              <div className='movie-item'>
                <Thumbnail movie={movie} mode='rec' key={index} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
