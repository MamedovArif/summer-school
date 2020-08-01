import React from 'react';
import {wrapperInnerPage} from '../../wrapper-inner-page';

import {LinkOfArray} from '../../../../types';

const SpecialOffers: React.FC = () => {
  return <div></div>
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Спецпредложения', path: 'catalog/special-offers'}
]

export default wrapperInnerPage(SpecialOffers, linksOfArray);
