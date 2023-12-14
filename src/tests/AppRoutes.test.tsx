import { MantineProvider } from '@mantine/core';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  NavigateFunction,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { describe, it } from 'vitest';
import routes from '../routes';

describe('Route testing', () => {
  let navigate: NavigateFunction;

  beforeEach(() => {
    const router = createMemoryRouter(routes);

    navigate = router.navigate;
    render(
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    );
  });

  it('loads home page on root route', async () => {
    await act(async () => navigate('/'));

    expect(screen.getByText('HomePage')).toBeInTheDocument();
    expect(screen.getByText('Trending Movies')).toBeInTheDocument();
    expect(screen.getByText('Recommended Movies')).toBeInTheDocument();
  });
  it('loads categories on categories route', async () => {
    await act(async () => navigate('/categories'));

    expect(await screen.findByText('Categories')).toBeInTheDocument();
  });
});
