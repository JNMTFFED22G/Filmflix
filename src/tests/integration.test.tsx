import { MantineProvider } from '@mantine/core';
import { render, screen, within } from '@testing-library/react';
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

    // Assert search input has rendered
    const searchInput = await screen.findByPlaceholderText(
      'Search for title, actor, year or genre'
    );
    expect(searchInput).toBeInTheDocument();
    await user.type(searchInput, movie.title);

    // Assert valid searcg result and click
    const movieLink = await within(
      await screen.findByTestId('search-result')
    ).findByText(movie.title);
    if (!movieLink) throw new Error('Movie thumb not found');
    expect(movieLink).toBeInTheDocument();
    await user.click(movieLink);

    // Assert film information is in the document
    expect(await screen.findByText(movie.title)).toBeInTheDocument();
    expect(await screen.findByText(movie.year)).toBeInTheDocument();
    expect(await screen.findByText(movie.genre)).toBeInTheDocument();
    expect(await screen.findByText(movie.synopsis)).toBeInTheDocument();
  });

  it('should be possible to browse movies by category', async () => {
    // Assert categories link is in the document
    const categoriesLink = await screen.findByRole('link', {
      name: /categories/i,
    });
    expect(categoriesLink).toBeInTheDocument();

    // Navigate to categories
    await user.click(categoriesLink);

    // Assert categories page is in the document
    const categories = [
      ...new Set(
        movies.flatMap(movie => movie.genre.split(', ')).filter(genre => genre)
      ),
    ];
    for (let i = 0; i < categories.length; i++) {
      expect(await screen.findByText(categories[i])).toBeInTheDocument();
    }

    // Click on a category
    await user.click(await screen.findByText(categories[0]));

    // Find films with that category
    const filteredMovies = movies.filter(movie =>
      movie.genre.includes(categories[0])
    );

    // Assert films in list have correct categories
    for (let i = 0; i < filteredMovies.length; i++) {
      expect(await screen.findByText(filteredMovies[i].title));
    }

    // Click on a film
    await user.click(await screen.findByText(filteredMovies[0].title));

    // Assert film information is in the document
    expect(
      await screen.findByText(filteredMovies[0].title)
    ).toBeInTheDocument();
    expect(await screen.findByText(filteredMovies[0].year)).toBeInTheDocument();
    expect(
      await screen.findByText(filteredMovies[0].genre)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(filteredMovies[0].synopsis)
    ).toBeInTheDocument();
  });

  it('should be possible to bookmark a film and find it in the bookmarked list', async () => {
    // TODO: Write integration test for bookmarking functionality
  });
});
