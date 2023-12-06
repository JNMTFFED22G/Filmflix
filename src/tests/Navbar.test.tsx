import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Navbar', () => {
  it('should render a header in navbar', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const headerElement = screen.getByText(/FILMFLIX/i);
    expect(headerElement).toBeInTheDocument();
  });
});
