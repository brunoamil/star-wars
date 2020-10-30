import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CategoryDataProvider from './context/CategoryData';

import './styles/global.scss';

import Routes from './routes';

const App = () => (
  <CategoryDataProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </CategoryDataProvider>

);


export default App;
