import React from 'react';

import './footer.css';
import logo from './img/logo-technomart.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <a  className="logotype" href="index.html">
          <img className="logotype-img"
          src={logo}
          alt="Логотип Техномарта" width="137" height="22" />
        </a>
        <div className="layout-contact">
         <p>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8
           <a className="tel-footer" href="tel:+78125550555">+7 (812) 555-05-55</a>
         </p>
        </div>
        <ul className="nav-footer">
         <li><a href="">Компания</a></li>
         <li><a href="">Новости</a></li>
         <li><a href="techcatalog.html">Каталог</a></li>
         <li><a href="">Доставка</a></li>
         <li><a href="">Контакты</a></li>
        </ul>
        <ul className="goods">
         <li><a  href="">Материалы</a></li>
         <li><a href="">Техника</a></li>
         <li><a href="">Инструмент</a></li>
         <li><a href="">Спецпредложения</a></li>
        </ul>
      </div>
      <div className="low-footer">
        <div className="low-footer-container">
         <p className="footer2 copyright">&copy; 2010–2019 Компания «Техномарт» Все права защищены</p>
         <ul className="social">
           <li><a className="vk" href=""><span class="visually-hidden">Вконтакте</span></a></li>
           <li><a className="fb" href=""><span class="visually-hidden">Фейсбук</span></a></li>
           <li><a className="insta" href=""><span class="visually-hidden">Инстаграм</span></a></li>
         </ul>
         <div className="layout-developer">
           <p className="feedback">Обратная связь: <a href="">mail@htmlacademy.ru</a></p>
           <p className="developer">Разработано — <a href="https://htmlacademy.ru/intensive/htmlcss">htmlacademy.ru</a></p>
         </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
