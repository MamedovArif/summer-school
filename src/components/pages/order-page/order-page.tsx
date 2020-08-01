import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {wrapperInnerPage} from '../wrapper-inner-page';

import {LinkOfArray, MainState, IsLoggedIn, User} from '../../../types';

type PropsOrderPage = {
  isLoggedIn: IsLoggedIn,
  currentUser: User
}

const OrderPage = (props: PropsOrderPage) => {
  if (props.isLoggedIn !== 'entrance') {
    return <Redirect to='/login' />
  }
  const {cartList} = props.currentUser;
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

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Закладки', path: 'bookmarks'},
  {title: 'Корзина', path: 'bookmarks/cart'},
  {title: 'Оформление заказа', path: 'bookmarks/cart/place-your-order'}
]

const mapStateToProps = ({isLoggedIn, currentUser}: MainState) => {
  return {
    isLoggedIn,
    currentUser
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(
  wrapperInnerPage(OrderPage, linksOfArray));
