import React from 'react';

import {wrapperInnerPage} from '../../wrapper-inner-page';
import { Link } from 'react-router-dom';

import './tool.css';

const Tool = () => {
  return (
    <ul className="catalog-tools">
      <li className="catalog-tool"><Link to="/catalog/tool/perforators/">Перфораторы</Link></li>
      <li className="catalog-tool"><Link to="/catalog/tool/angle-grinders/">Болгарки</Link></li>
    </ul>
  )
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Интрумент', path: 'catalog/tool'}
]

export default wrapperInnerPage(Tool, linksOfArray);
