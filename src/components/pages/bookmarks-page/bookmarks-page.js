import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import {wrapperInnerPage} from '../wrapper-inner-page';
import {withAppState} from '../../hoc';
import ItemDetails, {Record} from '../../item-details';


import './bookmarks-page.css';

const BookmarksPage = ({appState}) => {
  if (appState.isLoggedIn !== 'entrance') {
    return <Redirect to='/login' />
  }
  const {bookmarksList} = appState.currentUser;
  if (bookmarksList.length === 0) {
    return (
      <div className="wrapper-cart-list upper">
        <p>у вас пока нет закладок</p>
        <p>посмотрите наш <Link to='/catalog'>каталог</Link></p>
      </div>
    )
  }

  const items = bookmarksList.map((item) => {
    const getData = (iden) => {
      return new Promise((resolve) => {
        resolve(item);
      })
    }
    const {moveToNecessaryList, deleteFromNecessaryList} = appState.funcs;
    const {id} = item;
    const type = id.slice(0, 3);

    const forPerforators = () => {
      return (
        <Record field="impactEnergy" label="энергия удара" />
      )
    }
    const forAngleGrinders = () => {
      return (
        <Record field="maxDiscDiameter" label="макс. диаметр диска" />
      )
    }

    const mapping = {
      per: forPerforators,
      ang: forAngleGrinders,
    }
    return (
      <li key={id} className="cart-item">
        <ItemDetails itemId={id} getData={getData}>
          <Record field="model" label="модель" />
          <Record field="brand" label="бренд" />
          <Record field="initialPrice" label="первоначальная цена" />
          <Record field="price" label="цена" />
          <Record field="powerSupply" label="тип питания" />
          <Record field="power" label="мощность" />
          <Record field="weight" label="вес" />
          <Record field="numberOfIdle" label="макс. частота вращения диска" />
          {mapping[type]()}
        </ItemDetails>
        <button className="button-cart" name="moveFromBookmarks"
          onClick={(evt) => moveToNecessaryList(evt, id)}>добавить в корзину</button>
        <button className="button-cart" name="bookmarks"
          onClick={(evt) => deleteFromNecessaryList(evt, id)}>удалить из закладок</button>
      </li>
    )
  })
  return (
    <div className="wrapper-cart-list">
      <ul className="cart-list">
        {items}
      </ul>
      <Link className="button-cart nav-button" to="/bookmarks/cart">перейти в корзину</Link>
    </div>
  )
}

const linksOfArray = [
  {title: 'Закладки', path: 'bookmarks'}
]

export default wrapperInnerPage(withAppState(BookmarksPage), linksOfArray);
