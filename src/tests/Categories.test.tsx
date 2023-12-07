import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Categories from '../pages/Categories/Categories';

describe('Categories component', () => {
  it('should display "Drama", "Crime", and "Action"', async () => {
    render(<Categories />);

    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('Crime')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
