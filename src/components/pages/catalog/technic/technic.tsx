import React from 'react';
import {wrapperInnerPage} from '../../wrapper-inner-page';

import {LinkOfArray} from '../../../../types';

const Technic: React.FC = () => {
  return <div></div>
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Техника', path: 'catalog/technic'}
]

export default wrapperInnerPage(Technic, linksOfArray);

