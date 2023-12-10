import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SearchModal from '../components/SearchModal/SearchModal';

describe('SearchModal Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchModal onClose={() => {}} onCloseBtnClick={() => {}} />
      </MemoryRouter>
    );
  });

  it('renders SearchModal component with an input and close button', () => {
    const searchInput = screen.getByPlaceholderText(/Search for title, actor, year or genre/i);
    const closeButton = screen.getByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
  
  it('updates search results when the user types in the search input with "The Godfather"', async () => {
    const input = screen.getByPlaceholderText(/Search for title, actor, year or genre/i);
  
    userEvent.type(input, 'The Godfather');
    await waitFor(() => {
      expect(input).toHaveValue('The Godfather');
    });
  
    const searchResults = screen.getAllByTestId('search-result');
    expect(searchResults.length).toBeGreaterThan(0);
    expect(screen.getByText('The Godfather')).toBeInTheDocument();
  });
  

  it('displays an error message for incorrect search value', async () => {
    const input = screen.getByPlaceholderText(/Search for title, actor, year or genre/i);

    userEvent.type(input, 'The Godfatherr');
    await waitFor(() => {
      expect(input).toHaveValue('The Godfatherr');
    });
    const errorMessage = screen.getByText("Sorry, we couldn't find any results for your search.");
    expect(errorMessage).toBeInTheDocument();    
  });

  it('displays movies when filtering with correct search query', async () => {
    const input = screen.getByPlaceholderText(/Search for title, actor, year or genre/i);

    userEvent.type(input, 'Crime');
    await waitFor(() => {
      expect(input).toHaveValue('Crime');
    });

    const searchResults = screen.getAllByTestId('search-result');
    expect(searchResults.length).toBeGreaterThan(0);
    expect(screen.getByText('The Godfather')).toBeInTheDocument();
  });
});
