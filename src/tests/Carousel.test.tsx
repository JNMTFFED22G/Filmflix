import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MovieCarousel from '../components/Carousel/Carousel';
// import movies from '../data/movies.json';
import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';
import iMovies from '../types/iMovie';

describe('MovieCarousel', () => {
  test('renders MovieCarousel component', () => {
    // Arrange
    const movies: iMovies[] = [
      {
        title: 'The Shawshank Redemption',
        slug: 'the-shawshank-redemption',
        id: 1,
        year: 1994,
        rating: 'R',
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        genre: 'Drama',
        synopsis:
          'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
        thumbnail:
          'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
      },
    ];
    describe('MovieCarousel in rec mode', () => {
    //   beforeEach(() => {
    //     render(
    //       <MemoryRouter>
    //         <MantineProvider>
    //           <MovieCarousel movie={movies} mode='rec' />
    //         </MantineProvider>
    //       </MemoryRouter>
    //     );
    //   });

      expect(screen.getByText('Recommended Movies')).toBeInTheDocument();
    });
  });
});

//     test('renders correct number of slides', () => {
//       // Arrange
//       const movies: iMovies[] = [
//         {
//           title: 'The Shawshank Redemption',
//           slug: 'the-shawshank-redemption',
//           id: 1,
//           year: 1994,
//           rating: 'R',
//           actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//           genre: 'Drama',
//           synopsis:
//             'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
//           thumbnail:
//             'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg',
//         },
//       ];

//       // Act
//       render(
//         <MemoryRouter>
//           <MantineProvider>
//             <MovieCarousel movie={movies} mode='rec' />
//           </MantineProvider>
//         </MemoryRouter>
//       );

//       // Assert
//       const slides = screen.getAllByRole('listitem');
//       expect(slides).toHaveLength(movies.length);
//     });
//   });
// });
