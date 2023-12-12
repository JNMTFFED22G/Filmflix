import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieCarousel from '../components/Carousel/Carousel';
import movies from '../data/movies.json';
import { MantineProvider } from '@mantine/core';

describe('Test for moviecarousel component', () => {
  it('Should render carousel with recomendend title', () => {
    render(
      <MantineProvider>
      <MemoryRouter>
        <MovieCarousel movie={movies} mode={'rec'} />
      </MemoryRouter>
      </MantineProvider>
    );
    const titleElement = screen.getByText(/Recommended Movies/i);
    expect(titleElement).toBeInTheDocument();
  });
});

it('Should render carousel with trending title', () => {
  render(
    <MantineProvider>
    <MemoryRouter>
      <MovieCarousel movie={movies} mode={'trend'} />
    </MemoryRouter>
    </MantineProvider>
  );
  const titleElement = screen.getByText(/Trending Movies/i);
  expect(titleElement).toBeInTheDocument();
});

it('Should render carousel with 20 slides', () => {
  render(
    <MantineProvider>
    <MemoryRouter>
      <MovieCarousel movie={movies} mode={'rec'} />
    </MemoryRouter>
    </MantineProvider>
  );
  const slides = screen.getAllByRole('img');
  expect(slides.length).toBeGreaterThan(10);
});

it('Should render carousel with less than 10 slides in trending mode', () => {
  render(
    <MantineProvider>
    <MemoryRouter>
      <MovieCarousel movie={movies} mode={'trend'} />
    </MemoryRouter>
    </MantineProvider>
  );
  const slides = screen.getAllByRole('img');
  expect(slides.length).toBeLessThan(10);
});


 