import { useEffect, useState } from 'react';

import actionIcon from '../../assets/icons/action.png';
import adventureIcon from '../../assets/icons/adventure.png';
import biographyIcon from '../../assets/icons/biography.png';
import crimeIcon from '../../assets/icons/crime.png';
import fantasyIcon from '../../assets/icons/fantasy.png';
import historyIcon from '../../assets/icons/history.png';
import horrorIcon from '../../assets/icons/horror.png';
import romanceIcon from '../../assets/icons/romance.png';
import scifiIcon from '../../assets/icons/scifi.png';
import warIcon from '../../assets/icons/war.png';
import westernIcon from '../../assets/icons/western.png';
import movies from '../../data/movies.json';

import './Categories.css';
import '/src/App.css';

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([]);

  const categoryIcons: Record<string, string> = {
    Drama: actionIcon,
    Crime: crimeIcon,
    Action: actionIcon,
    Biography: biographyIcon,
    History: historyIcon,
    Adventure: adventureIcon,
    Western: westernIcon,
    Romance: romanceIcon,
    SciFi: scifiIcon,
    Fantasy: fantasyIcon,
    War: warIcon,
    Horror: horrorIcon,
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
          <div className='category-container' key={category}>
            <img
              className='category-icon'
              src={categoryIcons[category]}
              alt={`${category} icon`}
            />
            <h2 className='category-item'>{category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
