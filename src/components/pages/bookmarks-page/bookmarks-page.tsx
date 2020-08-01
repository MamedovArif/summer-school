import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {RouteComponentProps} from 'react-router';

import {wrapperInnerPage} from '../wrapper-inner-page';
import ItemDetails, {Record} from '../../item-details';
import {deleteFromNecessaryList, moveToNecessaryList} from '../../../actions';

import './bookmarks-page.css';
import { IsLoggedIn, User, MainState, Item} from '../../../types'

type PropsBookmarksPage = {
  isLoggedIn: IsLoggedIn,
  currentUser: User,
  moveToNecessaryList: (evt: React.MouseEvent<HTMLButtonElement>, id: string) => MainState,
  deleteFromNecessaryList: (evt: React.MouseEvent<HTMLButtonElement>, id: string) => MainState,
  match: RouteComponentProps,
  //history: RouteComponentProps,
  //location: RouteComponentProps,
  //staticContext: undefined
}

type Mapping = {
  [key: string]: Function,
  per: () => React.ReactElement,
  ang: () => React.ReactElement,
}

type Action = {
  type: string,
  event: Object,
  id: string
}

const BookmarksPage: React.ComponentType<PropsBookmarksPage> = (props) => {
  if (props.isLoggedIn !== 'entrance') {
    return <Redirect to='/login' />
  }

    const bookmarksList: Array<Item> = props.currentUser.bookmarksList;
    if (bookmarksList.length === 0) {
      return (
        <div className="wrapper-cart-list upper">
          <p>у вас пока нет закладок</p>
          <p>посмотрите наш <Link to='/catalog'>каталог</Link></p>
        </div>
      )
    }

  const items = bookmarksList.map((item: Item) => {
    const getData = (iden: string): Promise<Item> => {
      return new Promise((resolve) => {
        resolve(item);
      })
    }
    const {moveToNecessaryList, deleteFromNecessaryList} = props;
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

    const mapping: Mapping = {
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

const mapStateToProps = (state: MainState) => {
  return {
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps: Object = (dispatch: (arg: Action) => MainState) => {
  return {
    deleteFromNecessaryList: (event: React.MouseEvent<HTMLButtonElement>,
       id: string) => dispatch(deleteFromNecessaryList(event, id)),
    moveToNecessaryList: (event: React.MouseEvent<HTMLButtonElement>, id: string) => dispatch(moveToNecessaryList(event, id))
  }
}

export default wrapperInnerPage(connect(mapStateToProps, mapDispatchToProps)(BookmarksPage), linksOfArray);

