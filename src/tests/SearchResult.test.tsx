import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SearchResult from '../components/SearchResult/SearchResult';
import FilmView from '../pages/FilmView/FilmView';

describe('SearchResult Component', () => {
  it('navigates to FilmView component when clicking on a movie from SearchResult component', async () => {
    const movie = {
      title: "The Shawshank Redemption",
      slug: "the-shawshank-redemption",
      id: 1,
      year: 1994,
      rating: "R",
      actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      genre: "Drama",
      synopsis: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    };

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/:slug" element={<FilmView />} />
          <Route path="/" element={<SearchResult movie={movie} onClose={() => {}} />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByTestId('search-result'));
    await waitFor(() => {
      expect(screen.getByText(/The Shawshank Redemption/)).toBeInTheDocument();
    });
    expect(screen.queryByText('404')).toBeNull();
  });
});
