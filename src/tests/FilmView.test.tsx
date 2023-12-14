import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import {
  NavigateFunction,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import movies from '../data/movies.json';
import placeholder from '../img/placeholder.jpg';
import routes from '../routes';
import { MantineProvider } from '@mantine/core';

describe('FimView', () => {
  let navigate: NavigateFunction;
  const movie = movies[0];

  beforeEach(async () => {
    const router = createMemoryRouter(routes);

    navigate = router.navigate;
    render(
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    );

    await act(async () => navigate(`/${movie.slug}`));
  });

  it('does not land on 404 page when navigating to movie slug', () => {
    expect(screen.queryByText('404')).toBeNull();
  });

  it('displays all information about the movie', async () => {
    expect(await screen.findByText(movie.title)).toBeInTheDocument();
    expect(await screen.findByText(movie.year)).toBeInTheDocument();
    expect(
      await screen.findByText(movie.actors.join(', '))
    ).toBeInTheDocument();
    expect(
      await screen.findByText(`Rating ${movie.rating}`)
    ).toBeInTheDocument();
    expect(await screen.findByText(movie.genre)).toBeInTheDocument();
    expect(await screen.findByText(movie.synopsis)).toBeInTheDocument();
  });

  it("should render the movie's cover image", async () => {
    const image = await screen.findByAltText('Movie cover image');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', movie.thumbnail || placeholder);
  });
});
