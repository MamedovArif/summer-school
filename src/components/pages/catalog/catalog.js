import React from 'react';
import { Link } from 'react-router-dom';

import Filters from './filters';
import ListOfGoods from './list-of-goods';
import AboutPerforator from './about-perforator';
import {ServiceConsumer} from '../../service-context';

import './catalog.css';

const Catalog = () => {
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
            <Link to="/catalog/">Каталог</Link></li>
          <li><Link to="/tool">Инструмент</Link></li>
          <li><span>перфораторы</span></li>
        </ul>
        <div className="catalogh1">
          <h1>Перфораторы</h1>
        </div>
        <Filters />
        <ServiceConsumer>
          {(service) => {
              return <ListOfGoods service={service}/>
            }
          }
        </ServiceConsumer>
        <AboutPerforator />
       </div>
    </main>
  )
}

export default Catalog;
