import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import routes from './routes';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
</React.StrictMode>
);
