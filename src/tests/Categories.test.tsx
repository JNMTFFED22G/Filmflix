import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Categories from '../pages/Categories/Categories';

beforeEach(() => {
  render(<Categories />);
});

/* Check for specific movie genres */
test('should display "Drama", "Crime" and "Action"', () => {
  expect(screen.getByText('Drama')).toBeInTheDocument();
  expect(screen.getByText('Crime')).toBeInTheDocument();
  expect(screen.getByText('Action')).toBeInTheDocument();
});

/* Check that all categories are being rendered */
test('should render 15 categories', () => {
  const categoryContainer = screen.getAllByLabelText('category-container');
  const expectedCategoryCount = 15;

  expect(categoryContainer).toHaveLength(expectedCategoryCount);
});
