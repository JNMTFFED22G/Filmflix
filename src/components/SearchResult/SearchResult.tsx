import { Link } from 'react-router-dom';
import iMovie from '../../types/iMovie';
import placeholder from '../../img/placeholder.jpg';
import './search-result.css';

interface SearchResultsProps {
  movie: iMovie;
  onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function SearchResult({ movie, onClose }: SearchResultsProps) {
  return (
    <div onClick={onClose} className='search-result-item'>
      <Link to={`/${movie.slug}`}>
        <img
          src={movie.thumbnail}
          alt='Movie cover image'
          className='search-result-img'
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = placeholder;
          }}
        />
        <h4>{movie.title}</h4>
      </Link>
    </div>
  );
}
