import React from 'react';
import Slide from './slide';
import PopularGoods from './popular-goods';
import PopularMaker from './popular-maker';
import Services from './services';
import Company from './company';
import ErrorBoundry from '../../error-boundry';

import './main.css';

const Main = () => {
  return (
    <main className="main-container">
      <h1 className="visually-hidden">Компания "Техномарт"</h1>
      <Slide />
      <PopularGoods />
      <PopularMaker />
      <ErrorBoundry>
        <Services />
      </ErrorBoundry>
      <Company />
    </main>
  )
}

export default Main;
