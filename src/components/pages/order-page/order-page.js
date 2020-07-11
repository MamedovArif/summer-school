import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

const OrderPage = () => {
  return <div></div>
}

const linksOfArray = [
  {title: 'Закладки', path: 'bookmarks'},
  {title: 'Корзина', path: 'bookmarks/cart'},
  {title: 'Оформление заказа', path: 'bookmarks/cart/place-your-order'}
]

export default wrapperInnerPage(OrderPage, linksOfArray);
