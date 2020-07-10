import React from 'react';

import {wrapperInnerPage} from '../../wrapper-inner-page';
import { Link } from 'react-router-dom';

const Tool = () => {
  return (
    <ul>
      <li><Link to="/catalog/tool/perforators/">Перфораторы</Link></li>
    </ul>
  )
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Интрумент', path: 'catalog/tool'}
]

export default wrapperInnerPage(Tool, linksOfArray);
