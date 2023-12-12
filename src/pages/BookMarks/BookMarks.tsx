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
    <div className='center-container'>
      <div style={mountedStyle}>
        <div className='bookmark-grid'>
          <h1 className='page-title'>Bookmarks</h1>
        </div>
        {bookmarkedMovies.length === 0 ? (
          <div>
            <p>You have no bookmarked movies</p>
          </div>
        ) : (
          <div style={mountedStyle} className='bookmark-grid'>
            {bookmarkedMoviesToRender.map((movie, index) => (
              <div key={movie.id}>
                <Thumbnail movie={movie} mode='rec' key={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
