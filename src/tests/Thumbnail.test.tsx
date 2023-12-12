import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe } from 'vitest';
import Thumbnail from '../components/Thumbnail/Thumbnail';

describe('Thumbnail component', () => {
  let image: HTMLElement;
  const mockMovie = {
    title: 'The Shawshank Redemption',
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

  describe('Thumbnail component renders correctly', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Thumbnail movie={mockMovie} />
        </MemoryRouter>
      );
      image = screen.getByAltText(`${mockMovie.title} image`);
    });

    it('renders correctly with movie data', () => {
      expect(screen.getByText('1994')).toBeInTheDocument();
    });

    it('renders the thumbnail image correctly', () => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', mockMovie.thumbnail);
    });
  });

  it('renders correctly with movie data', () => {
    expect(screen.getByText(`${mockMovie.rating} rating`)).toBeInTheDocument();
  });
});
