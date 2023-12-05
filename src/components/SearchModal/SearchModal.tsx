import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search-modal.css';

interface SearchModalProps {
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

export default function SearchModal({ onClose }: SearchModalProps) {
  return (
    <div className='search-modal-overlay' onClick={onClose}>
      <div className='search-modal' onClick={e => e.stopPropagation()}>
        <div className='search-input-container'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input
            type='text'
            placeholder='Search for title, actor, year or genre'
          />
        </div>
      </div>
    </div>
  );
}
