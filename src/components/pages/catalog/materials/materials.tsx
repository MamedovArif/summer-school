import React from 'react';

import {wrapperInnerPage} from '../../wrapper-inner-page';

import {LinkOfArray} from '../../../../types';

const Materials: React.FC = () => {
  return <div></div>
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Материалы', path: 'catalog/materials'}
]

export default wrapperInnerPage(Materials, linksOfArray);
