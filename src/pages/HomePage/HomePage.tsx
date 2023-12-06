import Thumbnail from '../../components/Thumbnail/Thumbnail';
import iMovie from '../../types/iMovie';

const movie: iMovie = {
  title: 'The Shawshank Redemption Redemption Redemption',
  slug: 'the-shawshank-redemption',
  id: 1,
  year: 1994,
  rating: 'R',
  actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  genre: 'Drama',
  synopsis:
    'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
  thumbnail:
    'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
};

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      {/* <div style={{ display: 'flex', margin: '0 100px' }}> */}
      <Thumbnail movie={movie} />
      {/* </div> */}
    </div>
  );
}
