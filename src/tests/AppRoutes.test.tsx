import { MantineProvider } from '@mantine/core';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  NavigateFunction,
  RouterProvider,
  createMemoryRouter,
  Route,
} from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { describe, it } from 'vitest';
import HomePage from '../pages/HomePage/HomePage';
import routes from '../routes';

describe('Route testing', () => {
  let navigate: NavigateFunction;

  beforeEach(() => {
    const router = createMemoryRouter(routes);

    navigate = router.navigate;
    render(<RouterProvider router={router} />);
  });

  it('loads home page on root route', () => {
    render(
      <MantineProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Router>
      </MantineProvider>
    );

    expect(screen.getByText('HomePage')).toBeInTheDocument();
    expect(screen.getByText('Trending Movies')).toBeInTheDocument();
    expect(screen.getByText('Recommended Movies')).toBeInTheDocument();
  });

  it('loads categories on categories route', async () => {
    navigate('/categories');

    expect(await screen.findByText('Categories')).toBeInTheDocument();
  });
});
