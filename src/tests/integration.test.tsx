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
import iMovie from '../types/iMovie';

describe('Integration tests', () => {
  let user: ReturnType<typeof userEvent.setup>;
  const movie: iMovie = movies[0];

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
    // Assert boomark button exists within the first thumbnail
    const thumbs = await screen.findAllByTestId('thumb-title');
    const button = within(thumbs[0]).getByTestId('bookmark-button');
    expect(button).toBeInTheDocument();

    const title = within(thumbs[0]).getByTestId('thumb-title-text').textContent;
    if (!title) throw new Error('Film title not found');
    const movie: iMovie | undefined = movies.find(
      movie => movie.title === title
    );
    if (!movie) throw new Error('Movie not found');

    // Click on bookmark button
    await user.click(button);

    // Assert the film id is in session storage
    const bookmarks = JSON.parse(sessionStorage.getItem('bookmarks') || '[]');
    expect(bookmarks).toContain(movie.id);

    // Navigate to bookmarks
    await user.click(await screen.findByRole('link', { name: /bookmarks/i }));

    // Assert the film is in the bookmarks list
    expect(await screen.findByText(movie.title)).toBeInTheDocument();

    // Click on the film
    await user.click(await screen.findByText(movie.title));

    // Assert film information is in the document
    expect(await screen.findByText(movie.title)).toBeInTheDocument();
    expect(await screen.findByText(movie.year)).toBeInTheDocument();
    expect(await screen.findByText(movie.genre)).toBeInTheDocument();
    expect(await screen.findByText(movie.synopsis)).toBeInTheDocument();

    // Click on the bookmark button
    await user.click(await screen.findByTestId('bookmark-button'));

    // Assert the film id is not in session storage
    const updatedBookmarks = JSON.parse(
      sessionStorage.getItem('bookmarks') || '[]'
    );
    expect(updatedBookmarks).not.toContain(movie.id);
  });
});
