import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Thumbnail from '../components/Thumbnail/Thumbnail';
import movies from '../data/movies.json';
import FilmView from '../pages/FilmView/FilmView';

describe('BookmarkButton', () => {
  const movie = movies[0];

  it('should render in Thumbnails with mode "rec"', async () => {
    render(<Thumbnail movie={movie} mode='rec' />, { wrapper: MemoryRouter });

    expect(await screen.findByTestId('bookmark-button')).toBeInTheDocument();
  });

  it('should render in FilmView', () => {
    // render(<FilmView />, { wrapper: MemoryRouter });
    render(
      <MemoryRouter initialEntries={[`/${movie.slug}`]}>
        <Routes>
          <Route path='/:slug' element={<FilmView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('bookmark-button')).toBeInTheDocument();
  });
});
