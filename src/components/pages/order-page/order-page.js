import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

const OrderPage = () => {
  return <div></div>
}

const linksOfArray = [
  {title: 'Оформление заказа', path: 'place-your-order'}
]

export default wrapperInnerPage(OrderPage, linksOfArray);
