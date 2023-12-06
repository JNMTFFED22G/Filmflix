import iMovie from '../../types/iMovie';
import './Thumbnail.css';

interface ThumbnailProps {
  movie: iMovie;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  return (
    <>
      <div className='outerDiv'>
        <div className='titleContainer'>
          <div className='movieTitle'>{movie.title}</div>
          <div className='movieYear'>{movie.year}</div>
        </div>
        <img
          className='image'
          src={movie.thumbnail}
          alt={`${movie.title} image`}
        />
      </div>
    </>
  );
};

export default Thumbnail;
