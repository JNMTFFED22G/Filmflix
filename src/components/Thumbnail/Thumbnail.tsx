import { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../img/placeholder.jpg';
import iMovie from '../../types/iMovie';
import BookmarkButton from '../BookmarkButton/BookMarkButton';
import classes from './Thumbnail.module.css';

//TODO
// onClick on the heart icon, didnt add one since I figured its better left for the person setting up the fav-functionality
// Might have to restyle things slightly, depending on how the carousel is implemented
// Maybe add some hover effects?
// More tests need to be written once implemented in the app

interface TitleProps {
  movie: iMovie;
}

const MovieTitle: React.FC<TitleProps> = ({ movie }) => {
  return (
    <div className={classes.recTitleContainer}>
      <div className={classes.firstRow}>
        <Link className={classes.movieTitle} to={`/${movie.slug}`}>
          {movie.title}
        </Link>
        <BookmarkButton movieId={movie.id} size='small' />
      </div>
      <div className={classes.secondRow}>
        <div>{movie.year}</div>
        {movie.rating === 'Not Rated' ? null : <div>{movie.rating} rating</div>}
      </div>
    </div>
  );
};

interface ThumbnailProps {
  movie: iMovie;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  const [imgSrc, setImgSrc] = useState(movie.thumbnail);

  const handleError = () => {
    setImgSrc(placeholder);
  };

  return (
    <>
      <div className={classes.outerDiv}>
        <MovieTitle movie={movie} />
        <Link to={`/${movie.slug}`}>
          <img
            className={classes.image}
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
