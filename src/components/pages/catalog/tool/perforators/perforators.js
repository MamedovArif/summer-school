import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Filters from '../filters';
import AboutPerforator from './about-perforator';
import {PerforatorList} from '../../../../app-components';

import './perforators.css';

export default class Perforators extends Component {

  handleCheckbox() {

  }
  render() {
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
          <Filters handleCheckbox={this.handleCheckbox}/>

          <PerforatorList />

          <AboutPerforator />
         </div>
      </main>
    )
  }
}
