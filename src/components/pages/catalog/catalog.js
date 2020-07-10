import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <ul>
      <li><Link to="/catalog/special-offers">Спецпредложения</Link></li>
      <li><Link to="/catalog/technic">Техника</Link></li>
      <li><Link to="/catalog/tool">Инструмент</Link></li>
      <li><Link to="/catalog/materials">Материалы</Link></li>
    </ul>
  )
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog'}
]

export default wrapperInnerPage(Catalog, linksOfArray);
