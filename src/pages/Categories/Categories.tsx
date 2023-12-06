import { useEffect, useState } from 'react';
import movies from '../../data/movies.json';
import './Categories.css';
import '/src/App.css';

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(
        movies.flatMap(movie => movie.genre.split(', ')).filter(genre => genre)
      ),
    ];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className='categories-wrapper'>
      {categories.map(category => (
        <div className='category-container' key={category}>
          <h2 className='category-item'>{category}</h2>
        </div>
      ))}
    </div>
  );
}
