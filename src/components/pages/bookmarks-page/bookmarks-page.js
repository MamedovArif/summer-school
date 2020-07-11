import React from 'react';
import { Link } from 'react-router-dom';

import {wrapperInnerPage} from '../wrapper-inner-page';
import {withAppState} from '../../hoc';
import ItemDetails, {Record} from '../../item-details';

import './bookmarks-page.css';

const BookmarksPage = (props) => {
  const {appState} = props;
  const items = appState.bookmarksList.map((item) => {
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
        <button>добавить в корзину</button>
        <button>удалить из закладок</button>
      </li>
    )
  })
  return (
    <div>
      <ul>
        {items}
      </ul>
      <Link className="basket" to="/cart">перейти в корзину</Link>
    </div>
  )
}

const linksOfArray = [
  {title: 'Закладки', path: 'bookmarks'}
]

export default wrapperInnerPage(withAppState(BookmarksPage), linksOfArray);
