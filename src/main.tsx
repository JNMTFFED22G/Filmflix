import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import BookMarks from './pages/BookMarks.tsx';
import Categories from './pages/Categories.tsx';
import FilmView from './pages/FilmView.tsx';
import HomePage from './pages/HomePage.tsx';

//TODO:
// Create a 404 page
// Create a single category page

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}>
      <Route
        index
        path='/'
        element={<HomePage />}
      />
      <Route
        path='categories'
        element={<Categories />}>
        <Route
          path=':genre'
          element={<div>Category</div>}
        />
      </Route>
      <Route
        path=':slug'
        element={<FilmView />}
      />
      <Route
        path='/bookmarks'
        element={<BookMarks />}
      />
      <Route
        path='*'
        element={<div>404</div>}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
