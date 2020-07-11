import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';
import {withAppState} from '../../hoc';
import ItemDetails, {Record} from '../../item-details';

const CartPage = (props) => {
  const {appState} = props;
  //console.log(appState.cartList);
  const items = appState.cartList.map((item) => {
    const getData = (id) => {
      return new Promise((resolve) => {
        resolve(item);
      })
    }
    return (
      <li key={item.id}>
        <ItemDetails itemId={item.id} getData={getData}>
          <Record field="model" label="Model" />
          <Record field="brand" label="Brand" />
        </ItemDetails>
        <button>переместить в закладки</button>
        <button>удалить из корзины</button>
      </li>
    )
  })
  return (
    <ul>
      {items}
    </ul>
  )
}

const linksOfArray = [
  {title: 'Корзина', path: 'cart'}
]

export default wrapperInnerPage(withAppState(CartPage), linksOfArray);
