import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {RouterProvider} from 'react-router-dom';
import {beforeEach, describe} from 'vitest';
import {router} from '../main';

describe('App Component', () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });
});
