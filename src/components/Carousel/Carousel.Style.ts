import styled from '@emotion/styled';

export const StyledMovieCarousel = styled.div`
  margin-left: 1rem;
  a {
    text-decoration: none;
  }

  .css-1niiuc9 .mantine-Carousel-slide .mantine.Carousel-slide {
    padding: 0 0.5rem;
    background-color: transparent;
  }

  .mantine-Carousel-container {
    max-width: 1200px;
    padding: 0;

    @media (max-width: 800px) {
      padding: 0;
    }
  }

  .mantine-Carousel-viewport {
    margin: 0;
    padding: 0;
    position: relative;
  }

  .mantine-Carousel-slide {
    display: inline-flex;
    img {
      width: 100%;
      aspect-ratio: 217.35 / 320;
      object-fit: cover;
    }

    .overlay {
      bottom: 0;
      left: 0;
    }
  }

  .mantine-Carousel-control {
    box-shadow: none;
    color: #fff;
  }

  .overlay {
  }

  h2 {
    font-weight: 500;
    margin: 0.4rem 0;

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }
`;
