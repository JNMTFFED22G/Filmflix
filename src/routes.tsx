//TODO:
// Create a 404 page
// Create a single category page

import { createRoutesFromElements, Route } from 'react-router';
import App from './App';
import BookMarks from './pages/BookMarks/BookMarks';
import Categories from './pages/Categories/Categories';
import FilmView from './pages/FilmView/FilmView';
import HomePage from './pages/HomePage/HomePage';

const routes = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<HomePage />} />
    <Route path='categories' element={<Categories />}>
      <Route path=':genre' element={<div>Category</div>} />
    </Route>
    <Route path=':slug' element={<FilmView />} />
    <Route path='/bookmarks' element={<BookMarks />} />
    <Route path='*' element={<div>404</div>} />
  </Route>
);

export default routes;
