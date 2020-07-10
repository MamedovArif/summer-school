import React from 'react';

import {wrapperInnerPage} from '../../wrapper-inner-page';

const Materials = () => {
  return <div></div>
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Материалы', path: 'catalog/materials'}
]

export default wrapperInnerPage(Materials, linksOfArray);
