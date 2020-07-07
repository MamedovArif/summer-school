import React from 'react';
import { Link } from 'react-router-dom';

import Filters from './filters';
import ListOfGoods from './list-of-goods';
import AboutPerforator from './about-perforator';
//import {ServiceConsumer} from '../../../../service-context';
import {PerforatorList} from '../../../../app-components';

import './perforators.css';

const Perforators = () => {
  return (
    <main className="inner-page">
      <div className="inner-page-container">
        <ul className="breadcrumbs">
          <li>
            <Link className="icon-home" to="/">
              <span className="visually-hidden">Главная</span>
            </Link>
          </li>
          <li>
            <Link to="/catalog/">Каталог</Link>
          </li>
          <li><Link to="/catalog/tool">Инструмент</Link></li>
          <li><span>перфораторы</span></li>
        </ul>
        <div className="catalogh1">
          <h1>Интрументы</h1>
        </div>
        <Filters />


        <PerforatorList />


        <AboutPerforator />
       </div>
    </main>
  )
}

export default Perforators;
