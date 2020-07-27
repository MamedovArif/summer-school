import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {wrapperInnerPage} from '../wrapper-inner-page';
import ItemDetails, {Record} from '../../item-details';

import {processCounterQuantity, deleteFromNecessaryList, moveToNecessaryList} from '../../../actions';

import './cart-page.css';

const CartPage = (props) => {
  if (props.isLoggedIn !== 'entrance') {
    return <Redirect to='/login' />
  }
  const {cartList} = props.currentUser;
  if (cartList.length === 0) {
    return (
      <div className="wrapper-cart-list upper">
        <p>ваша корзина пока пуста</p>
        <p>посмотрите наш <Link to='/catalog'>каталог </Link>
        или свои <Link to='/bookmarks'>закладки</Link></p>
      </div>
    )
  }

  const items = cartList.map((item) => {
    const getData = (iden) => {
      return new Promise((resolve) => {
        resolve(item);
      })
    }
    const {moveToNecessaryList, deleteFromNecessaryList,
      counterQuantity} = props;
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
          <Record field="quantity" label="количество" />
        </ItemDetails>
        <button className="button-cart" name="moveFromCart"
          onClick={(evt) => moveToNecessaryList(evt, id)}>переместить в закладки</button>
        <button className="button-cart" name="cart"
          onClick={(evt) => deleteFromNecessaryList(evt, id)}>удалить из корзины</button>
        <button className="button-cart" name="add"
          onClick={(evt) => counterQuantity(evt, id)}>увеличить</button>
        <button className="button-cart" name="reduce"
          onClick={(evt) => counterQuantity(evt, id)}>уменьшить</button>
      </li>
    )
  })
  return (
    <div className="wrapper-cart-list">
      <ul className="cart-list">
        {items}
      </ul>
      <Link className="button-cart nav-button" to="/bookmarks/cart/place-your-order">Оформить заказ</Link>
      <Link className="button-cart nav-button" to="/bookmarks">перейти в закладки</Link>
    </div>
  )
}

const linksOfArray = [
  {title: 'Закладки', path: 'bookmarks'},
  {title: 'Корзина', path: 'bookmarks/cart'}
]

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterQuantity: (event, id) => dispatch(processCounterQuantity(event, id)),
    deleteFromNecessaryList: (event, id) => dispatch(deleteFromNecessaryList(event, id)),
    moveToNecessaryList: (event, id) => dispatch(moveToNecessaryList(event, id))
  }
}

export default wrapperInnerPage(connect(mapStateToProps, mapDispatchToProps)(CartPage), linksOfArray);
