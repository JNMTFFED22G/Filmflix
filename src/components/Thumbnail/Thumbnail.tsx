import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../img/placeholder.jpg';
import iMovie from '../../types/iMovie';
import './Thumbnail.css';

interface ThumbnailProps {
  movie: iMovie;
  mode: 'rec' | 'trend';
}

const TrendingTitle: React.FC<{ movie: iMovie }> = ({ movie }) => {
  return (
    <div className='titleContainer'>
      <Link className='movieTitle' to={movie.slug}>
        {movie.title} -
      </Link>
      <div>{movie.year}</div>
    </div>
  );
};

const RecommendedTitle: React.FC<{ movie: iMovie }> = ({ movie }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className='recTitleContainer'>
      <div className='firstRow'>
        <Link className='movieTitle' to={movie.slug}>
          {movie.title}
        </Link>
        <FontAwesomeIcon
          className='icon'
          icon={hover ? filledHeart : emptyHeart}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div className='secondRow'>
        <div>{movie.year}</div>
        <div>{movie.rating} rating</div>
      </div>
    </div>
  );
};

const Thumbnail: React.FC<ThumbnailProps> = ({ movie, mode }) => {
  const [imgSrc, setImgSrc] = useState(movie.thumbnail);

  const handleError = () => {
    setImgSrc(placeholder);
  };

  return (
    <>
      <div className='outerDiv'>
        {mode === 'rec' ? (
          <RecommendedTitle movie={movie} />
        ) : (
          <TrendingTitle movie={movie} />
        )}
        <Link to={movie.slug}>
          <img
            className='image'
            src={movie.thumbnail ? imgSrc : placeholder}
            onError={handleError}
            alt={`${movie.title} image`}
          />
        </Link>
      </div>
    </>
  );
};

export default Thumbnail;
