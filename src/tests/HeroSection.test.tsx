import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from '../components/HeroSection/HeroSection';

describe('HeroSection', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
  });

  it('displays the movie title', () => {
    expect(screen.getByText('Whiplash')).toBeInTheDocument();
  });

  it('displays the movie year', () => {
    expect(screen.getByText('2014')).toBeInTheDocument();
  });

  it('has a link to the movie page', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/whiplash');
  });

  it('has a watch now button', () => {
    expect(screen.getByText('Watch now ►')).toBeInTheDocument();
  });
});
