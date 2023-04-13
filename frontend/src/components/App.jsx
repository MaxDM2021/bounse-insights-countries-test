import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { HeaderAll } from './Header/Header';

import CountriesDetails from '../pages/CountriesDetails/CountriesDetails';

const CountrySearch = lazy(() => import('../pages/CountrySearch/CountrySearch'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));



export const App = () => {



  return (
    <Routes>
      <Route path="/" exact element={<HeaderAll />} />
      <Route path="countries" element={<CountrySearch />} />
      <Route path="countries/:id" element={<CountriesDetails/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    );
  };

