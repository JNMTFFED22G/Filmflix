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
    <>
      <div className='bookmarks-container'>
        <h1 className='bookmark-title'>Bookmarks</h1>
        <div style={mountedStyle}>
          {bookmarkedMovies.length === 0 ? (
            <span className='bookmark-span'>You have no bookmarked movies</span>
          ) : (
            <>
              <div style={mountedStyle} className='bookmark-grid'>
                {bookmarkedMoviesToRender.map((movie, index) => (
                  <div key={movie.id}>
                    <Thumbnail movie={movie} key={index} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
