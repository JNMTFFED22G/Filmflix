import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../SearchModal/SearchModal';
import './navbar.css';

export default function Navbar() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleSearchModal = () => {
    setIsSearchModalOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <h1><Link to="/" className="logo">FILMFLIX</Link></h1>
      <ul>
        <li>
          <span className="open-close-icons" onClick={toggleSearchModal}>
            <FontAwesomeIcon icon={isSearchModalOpen ? faTimes : faSearch} />
          </span>
        </li>
        <li><Link style={{ color: '#000000', textDecoration: 'none' }} to="/categories">Categories</Link></li>
        <li><Link style={{ color: '#000000', textDecoration: 'none' }} to="/bookmarks">Bookmarks</Link></li>
        <span className="hamburger-span"></span>
      </ul>

      {isSearchModalOpen && <SearchModal onClose={toggleSearchModal} />}
    </nav>
  );
}
