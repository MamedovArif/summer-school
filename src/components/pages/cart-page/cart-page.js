import React from 'react';
import { Link } from 'react-router-dom';

import {wrapperInnerPage} from '../wrapper-inner-page';
import {withAppState} from '../../hoc';
import ItemDetails, {Record} from '../../item-details';

import './cart-page.css';

const CartPage = (props) => {
  const {appState} = props;
  const items = appState.cartList.map((item) => {
    const getData = (iden) => {
      return new Promise((resolve) => {
        resolve(item);
      })
    }
    const {moveToBookmarks, deleteFromCart} = appState.funcs;

    const {id} = item;
    return (
      <li key={id}>
        <ItemDetails itemId={id} getData={getData}>
          <Record field="model" label="Model" />
          <Record field="brand" label="Brand" />
        </ItemDetails>
        <button onClick={() => moveToBookmarks(id)}>переместить в закладки</button>
        <button onClick={() => deleteFromCart(id)}>удалить из корзины</button>
      </li>
    )
  })
  return (
    <div>
      <ul>
        {items}
      </ul>
      <Link className="orders" to="/place-your-order">Оформить заказ</Link>
      <Link className="bookmark" to="/bookmarks">перейти в закладки</Link>
    </div>
  )
}

const linksOfArray = [
  {title: 'Закладки', path: 'bookmarks'},
  {title: 'Корзина', path: 'bookmarks/cart'}
]

export default wrapperInnerPage(withAppState(CartPage), linksOfArray);
