import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

import {LinkOfArray} from '../../../types';

const Delivery: React.FC = () => {
  return <div></div>
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Доставка', path: 'delivery'}
]

export default wrapperInnerPage(Delivery, linksOfArray);
