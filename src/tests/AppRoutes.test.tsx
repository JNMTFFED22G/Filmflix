import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import {describe, it} from 'vitest';
import routes from '../routes';

describe('Route testing', () => {
  beforeEach(() => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
  });

  it('loads home page on root route', async () => {
    expect(
      await screen.findByText('HomePage'),
    ).toBeInTheDocument();
  });
});
