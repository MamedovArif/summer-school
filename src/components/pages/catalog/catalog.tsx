import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

import { Link } from 'react-router-dom';

import './catalog.css';

import {LinkOfArray} from '../../../types';

const Catalog: React.FC = () => {
  return (
    <ul className="catalog-list">
      <li className="child-catalog sale"><Link to="/catalog/special-offers">Спецпредложения</Link></li>
      <li className="child-catalog technique"><Link to="/catalog/technic">Техника</Link></li>
      <li className="child-catalog tool"><Link to="/catalog/tool">Инструмент</Link></li>
      <li className="child-catalog materials"><Link to="/catalog/materials">Материалы</Link></li>
    </ul>
  )
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Каталог', path: 'catalog'}
]

export default wrapperInnerPage(Catalog, linksOfArray);
