import React from 'react';
import { Link } from 'react-router-dom';

import './popular-goods.css';

const PopularGoods = () => {
  return (
    <section className="popular-goods">
      <div className="upper-container">
       <h2 className="popular-goods-headline">популярные товары:</h2>
       <Link className="all-popular-goods" to="/catalog">все популярные товары</Link>
      </div>
      <ul className="main-goods">
       <li className="popular-item-goods">
         <div className="actions">
          <Link to="/buy" className="buy-actions">Купить</Link>
          <Link to="/bookmarks" className="bookmarks-actions">В закладки</Link>
         </div>
         <div className="image-container">
          <img className="image" src="img/perforator0.jpg" alt="Перфоратор BOSCH BFG 9000"
            width="218" height="170" />
         </div>
         <h3><Link className="title" to="/catalog/7">Перфоратор BOSCH BFG 9000</Link></h3>
         <div className="discount">32500 P.</div>
         <div className="price">25500 P.</div>
       </li>
       <li className="popular-item-goods">
         <div className="actions">
          <Link to="/buy" className="buy-actions">Купить</Link>
          <Link to="/bookmarks" className="bookmarks-actions">В закладки</Link>
         </div>
         <div className="image-container">
          <img className="image" src="img/perforator1.jpg" alt="Перфоратор BOSCH BFG 3000"
            width="218" height="170" />
         </div>
         <h3><Link className="title" to="/catalog/2">Перфоратор BOSCH BFG 3000</Link></h3>
         <div className="discount">22500 P.</div>
         <div className="price">15500 P.</div>
       </li>
       <li className="popular-item-goods">
         <div className="actions">
          <Link to="/buy" className="buy-actions">Купить</Link>
          <Link to="/bookmarks" className="bookmarks-actions">В закладки</Link>
         </div>
         <div className="image-container">
          <img className="image" src="img/perforator2.jpg" alt="Перфоратор BOSCH BFG 6000"
            width="218" height="170" />
         </div>
         <h3><Link className="title" to="/catalog/5">Перфоратор BOSCH BFG 6000</Link></h3>
         <div className="discount">30500 P.</div>
         <div className="price">25500 P.</div>
       </li>
       <li className="popular-item-goods">
         <div className="flag flag-new">новинка</div>
         <div className="actions">
          <Link to="/buy" className="buy-actions">Купить</Link>
          <Link to="/bookmarks" className="bookmarks-actions">В закладки</Link>
         </div>
         <div className="image-container">
          <img className="image" src="img/perforator1.jpg" alt="Перфоратор BOSCH BFG 2000"
            width="218" height="170" />
         </div>
         <h3><Link className="title" to="/catalog/4">Перфоратор BOSCH BFG 2000</Link></h3>
         <div className="discount"></div>
         <div className="price">12500 P.</div>
       </li>
      </ul>
    </section>
  )
}

export default PopularGoods;
