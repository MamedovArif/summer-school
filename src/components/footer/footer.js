import React from 'react';

import { Link } from 'react-router-dom';

import './footer.css';
import logo from './img/logo-technomart.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <Link  className="logotype" to="/">
          <img className="logotype-img"
          src={logo}
          alt="Логотип Техномарта" width="137" height="22" />
        </Link>
        <div className="layout-contact">
         <p>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8
           <a className="tel-footer" href="tel:+78125550555">+7 (812) 555-05-55</a>
         </p>
        </div>
        <ul className="nav-footer">
         <li><Link to="/company">Компания</Link></li>
         <li><Link to="/news">Новости</Link></li>
         <li><Link to="/catalog">Каталог</Link></li>
         <li><Link to="/delivery">Доставка</Link></li>
         <li><Link to="/contacts">Контакты</Link></li>
        </ul>
        <ul className="goods">
         <li><Link  to="/catalog/materials">Материалы</Link></li>
         <li><Link to="/catalog/technic">Техника</Link></li>
         <li><Link to="/catalog/tool">Инструмент</Link></li>
         <li><Link to="/catalog/special-offers">Спецпредложения</Link></li>
        </ul>
      </div>
      <div className="low-footer">
        <div className="low-footer-container">
         <p className="footer2 copyright">&copy; 2010–2020 Компания «Техномарт» Все права защищены</p>
         <ul className="social">
           <li>
             <a className="vk" href="https://vk.com/">
               <span className="visually-hidden">Вконтакте</span>
             </a>
           </li>
           <li>
             <a className="fb" href="https://ru-ru.facebook.com/">
               <span className="visually-hidden">Фейсбук</span>
             </a>
           </li>
           <li>
             <a className="insta" href="https://www.instagram.com/">
               <span className="visually-hidden">Инстаграм</span>
             </a>
           </li>
         </ul>
         <div className="layout-developer">
           <p className="feedback">Обратная связь: <Link to="/contacts">arifmho@yandex.ru</Link></p>
           <p className="developer">Разработано — <a href="https://www.mera.com/">mera.com/</a></p>
         </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
