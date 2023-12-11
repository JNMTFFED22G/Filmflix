import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    // Render film view with film slug as parameter
    render(
      <MemoryRouter initialEntries={[`/${movie.slug}`]}>
        <Routes>
          <Route path='/:slug' element={<FilmView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('bookmark-button')).toBeInTheDocument();
  });

  it('should be possible to add films to then remove them from the bookmarks', async () => {
    // Populate with fake ids
    // This in order to test that only the correct id is added/removed
    sessionStorage.setItem(
      'bookmarks',
      JSON.stringify([2, 3, 4].filter(id => id !== movie.id))
    );

    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={[`/${movie.slug}`]}>
        <Routes>
          <Route path='/:slug' element={<FilmView />} />
        </Routes>
      </MemoryRouter>
    );

    // Double check that the movie is not in the bookmarks
    expect(
      JSON.parse(sessionStorage.getItem('bookmarks') || '[]')
    ).not.toContain(movie.id);

    await user.click(await screen.findByTestId('bookmark-button'));

    // Check that the movie is now in the bookmarks
    expect(JSON.parse(sessionStorage.getItem('bookmarks') || '[]')).toContain(
      movie.id
    );

    await user.click(await screen.findByTestId('bookmark-button'));

    // Check that the movie is now removed from the bookmarks
    expect(
      JSON.parse(sessionStorage.getItem('bookmarks') || '[]')
    ).not.toContain(movie.id);
  });
});
