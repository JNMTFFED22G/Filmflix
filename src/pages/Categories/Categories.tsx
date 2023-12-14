import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import movies from '../../data/movies.json';
import './Categories.css';
import '/src/App.css';

/* Genre icons */
import actionIcon from '../../assets/icons/action.png';
import adventureIcon from '../../assets/icons/adventure.png';
import biographyIcon from '../../assets/icons/biography.png';
import crimeIcon from '../../assets/icons/crime.png';
import dramaIcon from '../../assets/icons/drama.png';
import fantasyIcon from '../../assets/icons/fantasy.png';
import historyIcon from '../../assets/icons/history.png';
import horrorIcon from '../../assets/icons/horror.png';
import musicIcon from '../../assets/icons/music.png';
import mysteryIcon from '../../assets/icons/mystery.png';
import fallbackIcon from '../../assets/icons/questionmark.png';
import romanceIcon from '../../assets/icons/romance.png';
import scifiIcon from '../../assets/icons/scifi.png';
import thrillerIcon from '../../assets/icons/thriller.png';
import warIcon from '../../assets/icons/war.png';
import westernIcon from '../../assets/icons/western.png';
import iMovie from '../../types/iMovie';

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isActive, setIsActive] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState<iMovie[]>([]);
  const navigate = useNavigate();

  const mountedStyle = { animation: 'inAnimation 250ms ease-in' };
  const unmountedStyle = {
    animation: 'outAnimation 270ms ease-out',
    animationFillMode: 'forwards',
  };

  /* Genre icons */
  const categoryIcons: Record<string, string> = {
    Drama: dramaIcon,
    Thriller: thrillerIcon,
    Mystery: mysteryIcon,
    Music: musicIcon,
    Crime: crimeIcon,
    Action: actionIcon,
    Biography: biographyIcon,
    History: historyIcon,
    Adventure: adventureIcon,
    Western: westernIcon,
    Romance: romanceIcon,
    'Sci-Fi': scifiIcon,
    Fantasy: fantasyIcon,
    War: warIcon,
    Horror: horrorIcon,
    FallbackIcon: fallbackIcon,
  };

  /* Handle category click */
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    activeToggle();

    const moviesForCategory = movies.filter(movie =>
      movie.genre.split(', ').includes(category)
    );
    setFilteredMovies(moviesForCategory);
  };

  /* Toggle active state */
  const activeToggle = () => {
    setIsActive(!isActive);
    navigate('/categories');
  };

  /* Retrieve the unique categories */
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(
        movies.flatMap(movie => movie.genre.split(', ')).filter(genre => genre)
      ),
    ];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className='center-container'>
      {isActive ? (
        <div style={isActive ? mountedStyle : unmountedStyle}>
          <div className='category-grid'>
            <div className='go-back-button-wrapper'>
              <button onClick={() => activeToggle()} className='go-back-button'>
                <FontAwesomeIcon className='arrow-icon' icon={faArrowLeft} />
                Go back
              </button>
              <h1>{selectedCategory}</h1>
            </div>
          </div>
          <div className='category-grid'>
            {filteredMovies.map((movie, index) => (
              <div aria-label='movie-item' key={movie.id}>
                <Thumbnail movie={movie} key={index} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={'categories-wrapper'}>
          {categories.map((category, i) => (
            <Link
              style={{ textDecoration: 'none' }}
              to={`/categories/${category}`}
              key={i}
            >
              <div
                style={isActive ? unmountedStyle : mountedStyle}
                className={`category-item ${
                  category === selectedCategory ? 'selected' : ''
                }`}
                aria-label='category-item'
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  className='category-icon'
                  src={categoryIcons[category]}
                  alt={`${category} icon`}
                />
                <p className='category-title'>{category}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
