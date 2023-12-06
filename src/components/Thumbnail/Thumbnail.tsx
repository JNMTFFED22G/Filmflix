import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholder from '../../img/placeholder.jpg';
import iMovie from '../../types/iMovie';
import './Thumbnail.css';

interface ThumbnailProps {
  movie: iMovie;
}

const TrendingTitle: React.FC<ThumbnailProps> = ({ movie }) => {
  return (
    <div className='titleContainer'>
      <div className='movieTitle'>{movie.title} -</div>
      <div className='movieYear'>{movie.year}</div>
    </div>
  );
};

const RecommendedTitle: React.FC<ThumbnailProps> = ({ movie }) => {
  return (
    <div className='recTitleContainer'>
      <div className='firstRow'>
        <div className='recMovieTitle'>{movie.title}</div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className='secondRow'>
        <div className='recMovieYear'>{movie.year}</div>
        <div>{movie.rating} rating</div>
      </div>
    </div>
  );
};

const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  return (
    <>
      <div className='outerDiv'>
        <RecommendedTitle movie={movie} />

        <img
          className='image'
          src={movie.thumbnail ? movie.thumbnail : placeholder}
          alt={`${movie.title} image`}
        />
      </div>
    </>
  );
};

export default Thumbnail;
