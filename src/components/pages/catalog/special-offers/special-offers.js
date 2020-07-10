import React from 'react';
import {wrapperInnerPage} from '../../wrapper-inner-page';

const SpecialOffers = () => {
  return <div></div>
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Спецпредложения', path: 'catalog/special-offers'}
]

export default wrapperInnerPage(SpecialOffers, linksOfArray);
