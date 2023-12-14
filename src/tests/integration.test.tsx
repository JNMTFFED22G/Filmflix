import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import movies from '../data/movies.json';
import BookMarks from '../pages/BookMarks/BookMarks';
import Categories from '../pages/Categories/Categories';
import FilmView from '../pages/FilmView/FilmView';
import HomePage from '../pages/HomePage/HomePage';

describe('Integration tests', () => {
  let user: ReturnType<typeof userEvent.setup>;
  const movie = movies[0];

  beforeEach(() => {
    // render(<RouterProvider router={createMemoryRouter(routes)} />);
    render(
      <MantineProvider>
        <MemoryRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<HomePage />} />
              <Route path='categories' element={<Categories />}>
                <Route path=':genre' element={<div>Category</div>} />
              </Route>
              <Route path=':slug' element={<FilmView />} />
              <Route path='/bookmarks' element={<BookMarks />} />
              <Route path='*' element={<div>404</div>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </MantineProvider>
    );

    user = userEvent.setup();
  });

  it('should be possible to find a film via search', async () => {
    const searchButton = await screen.findByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
    await user.click(searchButton);

    const searchInput = await screen.findByPlaceholderText(
      'Search for title, actor, year or genre'
    );
    expect(searchInput).toBeInTheDocument();
    await user.type(searchInput, movie.title);

    const movieThumb = (await screen.findByText(movie.title)).parentElement;
    if (!movieThumb) throw new Error('Movie thumb not found');
    expect(movieThumb).toBeInTheDocument();
    await user.click(movieThumb);

    screen.debug();
    // expect(await screen.findByText(movie.title)).toBeInTheDocument();
    // expect(await screen.findByText(movie.year)).toBeInTheDocument();
    // expect(await screen.findByText(movie.genre)).toBeInTheDocument();
    // expect(await screen.findByText(movie.synopsis)).toBeInTheDocument();
  });

  it('should be navigate to categories and browse them', () => {});

  it('should be possible to bookmark a film and find it in the bookmarked list', () => {});
});
