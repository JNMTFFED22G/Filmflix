import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  NavigateFunction,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { describe, it } from 'vitest';
import routes from '../routes';

describe('Route testing', () => {
  let navigate: NavigateFunction;

  beforeEach(() => {
    const router = createMemoryRouter(routes);

    navigate = router.navigate;
    render(<RouterProvider router={router} />);
  });

  it('loads home page on root route', async () => {
    expect(await screen.findByText('HomePage')).toBeInTheDocument();
  });

  it('loads categories on categories route', async () => {
    navigate('/categories');

    expect(await screen.findByText('Categories')).toBeInTheDocument();
  });
});
