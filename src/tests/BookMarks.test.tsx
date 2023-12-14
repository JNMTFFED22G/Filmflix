import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookMarks from '../pages/BookMarks/BookMarks';

beforeEach(() => {
  render(
    <MemoryRouter>
      <BookMarks />
    </MemoryRouter>
  );
});

/* Check that title is rendered  */
test('should find title "Bookmarks"', () => {
  expect(screen.getByText('Bookmarks')).toBeInTheDocument();
});

/* Check if there are no bookmarked movies  */
test('if there are no bookmarked movies, show "You have no bookmarked movies', () => {
  expect(screen.getByText('You have no bookmarked movies')).toBeInTheDocument();
});

/* Check that a user is able to remove a movie from their bookmarks and that the Bookmarks 
page no longer displays the movie that has been removed */
test('should remove movie and for that movie to no longer be visible on bookmarks page', () => {});
