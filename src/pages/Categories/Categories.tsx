import { useEffect, useState } from 'react';
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
import romanceIcon from '../../assets/icons/romance.png';
import scifiIcon from '../../assets/icons/scifi.png';
import thrillerIcon from '../../assets/icons/thriller.png';
import warIcon from '../../assets/icons/war.png';
import westernIcon from '../../assets/icons/western.png';
import movies from '../../data/movies.json';

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

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
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

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
      <div className='categories-wrapper'>
        {categories.map(category => (
          <div
            className='category-container'
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            <img
              className='category-icon'
              src={categoryIcons[category]}
              alt={`${category} icon`}
            />
            <p className='category-item'>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
