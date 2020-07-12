import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import {wrapperInnerPage} from '../wrapper-inner-page';

const OrderPage = ({appState}) => {
  if (appState.isLoggedIn !== 'entrance') {
    return <Redirect to='/login' />
  }
  const {cartList} = appState.currentUser;
  if (cartList.length === 0) {
    return (
      <div>
        <p>добавьте в корзину интересующий вас товар из нашего
        <Link to='/catalog'> католога</Link>,
        чтобы оформить заказ</p>
      </div>
    )
  }
  return <div>оформляемся</div>
}

const linksOfArray = [
  {title: 'Закладки', path: 'bookmarks'},
  {title: 'Корзина', path: 'bookmarks/cart'},
  {title: 'Оформление заказа', path: 'bookmarks/cart/place-your-order'}
]

export default wrapperInnerPage(OrderPage, linksOfArray);
