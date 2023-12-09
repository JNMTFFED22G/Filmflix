import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import moviesJSON from '../../data/movies.json';
import SearchResult from '../SearchResult/SearchResult';
import './search-modal.css';

interface SearchModalProps {
  onClose: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onCloseBtnClick: () => void;
}

export default function SearchModal({ onClose, onCloseBtnClick }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = moviesJSON.filter(movie => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return (
      movie.title.toLowerCase().includes(lowerCaseQuery) ||
      movie.year.toString().includes(searchQuery) ||
      movie.genre.toLowerCase().includes(lowerCaseQuery) ||
      movie.actors.some(actor => actor.toLowerCase().includes(lowerCaseQuery))
    );
  });

  return (
    <>
    <div className='search-modal-overlay' onClick={onClose}>
      <div className='search-modal' onClick={e => e.stopPropagation()}>
        <div className='input-btn-wrapper'>
          <div className='search-container'>
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            <input
              type='text'
              placeholder='Search for title, actor, year or genre'
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>
          <button className='close-button' aria-label='Close modal' onClick={onCloseBtnClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

       <div className='search-result-container'>
          <div className='search-results'>
            {filteredMovies.length === 0 ? (
              <div className='error-message'>Sorry, no results found.</div>
            ) : (
              filteredMovies.map((movie) => (
                <SearchResult
                  key={movie.slug}
                  movie={movie}
                  onClose={onClose}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
