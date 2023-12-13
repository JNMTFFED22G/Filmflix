import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Thumbnail from '../components/Thumbnail/Thumbnail';
import movies from '../data/movies.json';
import FilmView from '../pages/FilmView/FilmView';

describe('BookmarkButton', () => {
  it('should render in Thumbnails with mode "rec"', async () => {
    const movie = movies[0];
    render(<Thumbnail movie={movie} />, { wrapper: MemoryRouter });

    expect(await screen.findByTestId('bookmark-button')).toBeInTheDocument();
  });

  it('should render in FilmView', () => {
    const movie = movies[0];
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

  it('should be possible to toggle bookmarks in film view', async () => {
    // Populate with fake ids
    // This in order to test that only the correct id is added/removed
    const mockIds = [1, 2, 3, 4, 5];

    const movie = movies.find(m => !mockIds.includes(m.id))!;

    sessionStorage.setItem('bookmarks', JSON.stringify(mockIds));

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

  it('should be possible to toggle bookmarks in thumbnails', async () => {
    // Populate with fake ids
    // This in order to test that only the correct id is added/removed
    const mockIds = [1, 2, 3, 4, 5];

    const movie = movies.find(m => !mockIds.includes(m.id))!;

    sessionStorage.setItem('bookmarks', JSON.stringify(mockIds));

    const user = userEvent.setup();

    render(<Thumbnail movie={movie} />, { wrapper: MemoryRouter });

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
