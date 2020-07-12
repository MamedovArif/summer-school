import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from './img/logo-technomart.svg';

const Header = (props) => {
  const {currentUser, isLoggedIn} = props.appState;
  let cartList;
  let bookmarksList;
  if (currentUser) {
    cartList = currentUser.cartList;
    bookmarksList = currentUser.bookmarksList;
  } else {
    cartList = [];
    bookmarksList = [];
  }

  const mapping = {
    out: 'Войти',
    entrance: 'Выйти'
  }
  const mappingQ = {
    out: 'login',
    entrance: 'logout'
  }
  const registration = isLoggedIn === 'entrance' ? null :
    (
      <Link className="registration" to="/registration">
        Регистрация
      </Link>
    );
  return (//задать по умолчанию 0
    <header className="main-header">
      <div className="top-header">
        <div className="top-header-container">
          <Link className="logotype" to="/">
            <img className="logotype-img" src={logo}
              alt="Логотип Техномарта" width="137" height="22" />
          </Link>
          <form method="get" action="https://echo.htmlacademy.ru">
            <label className="search-container" htmlFor="search">
              <input id="search" className="search" name="search" type="text" placeholder="Поиск:" />
              <span className="img-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path  d="M17 15.586l-3.542-3.542A7.465 7.465 0 0 0 15 7.5 7.5 7.5 0 1 0 7.5 15c1.71 0
                3.282-.579 4.544-1.542L15.586 17 17 15.586zM2 7.5C2 4.467 4.467 2 7.5 2 10.532 2 13 4.467 13
                7.5c0 3.032-2.468 5.5-5.5 5.5A5.506 5.506 0 0 1 2 7.5z"/></svg>
              </span>
            </label>
          </form>
          <Link className="bookmark" to="/bookmarks">Закладки: {bookmarksList.length}</Link>
          <Link className="basket" to="/bookmarks/cart">Корзина: {cartList.length}</Link>
          <Link className="orders" to="/bookmarks/cart/place-your-order">
            Оформить заказ
          </Link>
        </div>
      </div>
      <div className="low-header-container">
        <p className="description">Интернет-магазин строительных материалов<br /> и инструментов для ремонта</p>
        <div className="header-contact">
          <a className="tel" href="tel:+78125550555">+7 (812) 555-05-55</a>
          <p className="address">г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</p>
        </div>
        <div className="layout-button">
          <Link className="enter" to={`/${mappingQ[isLoggedIn]}`}>
            {mapping[isLoggedIn]}
          </Link>
          {registration}
        </div>
        <nav className="navigation">
          <ul>
            <li><Link className="main-nav" to="/">Главная</Link></li>
            <li><Link className="company-nav" to="/company">Компания</Link></li>
            <li><Link className="catalog-nav" to="/catalog">Каталог</Link></li>
            <li><Link className="news-nav" to="/news">Новости</Link></li>
            <li><Link className="specialoffer-nav" to="/catalog/special-offers">Спецпредложения</Link></li>
            <li><Link className="delivery-nav" to="/delivery">Доставка</Link></li>
            <li><Link className="contacts-nav" to="/contacts">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

/*
<div class="authorization">
  <div class="account-exit">
    <a class="personal-account">Равшан Джамшутович</a>
    <a class="exit"><span class="visually-hidden">Выйти</span></a>
  </div>
  <a class="my-orders" href="">Мои заказы</a>
  <a class="account" href="">Личный кабинет</a>
</div> */
