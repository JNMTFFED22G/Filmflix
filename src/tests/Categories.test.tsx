import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Categories from '../pages/Categories/Categories';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>
  );
});

/* Check for specific movie genres */
test('should display "Drama", "Crime" and "Action"', () => {
  expect(screen.getByText('Drama')).toBeInTheDocument();
  expect(screen.getByText('Crime')).toBeInTheDocument();
  expect(screen.getByText('Action')).toBeInTheDocument();
});

/* Check that all categories are being rendered */
test('should render 15 categories', () => {
  const categoryContainer = screen.getAllByLabelText('category-item');
  const expectedCategoryCount = 15;

  expect(categoryContainer).toHaveLength(expectedCategoryCount);
});

/* Check that biography page is being rendered & specific biography movies are rendered  */
test('when clicking biography icon biography movies are rendered', async () => {
  const biographyIcon = screen.getByText('Biography');

  await userEvent.click(biographyIcon);

  expect(screen.getByText('Biography')).toBeInTheDocument();
  expect(screen.queryByText('Drama')).not.toBeInTheDocument();
  expect(screen.getByText("Schindler's List")).toBeInTheDocument();
  expect(screen.getByText('Goodfellas')).toBeInTheDocument();
});
