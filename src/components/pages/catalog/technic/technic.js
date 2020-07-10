import React from 'react';
import {wrapperInnerPage} from '../../wrapper-inner-page';

const Technic = () => {
  return <div></div>
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Техника', path: 'catalog/technic'}
]

export default wrapperInnerPage(Technic, linksOfArray);

