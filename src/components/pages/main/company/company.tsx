import React from 'react';

import { Link } from 'react-router-dom';

import './company.css';

const Company: React.FC = () => {
  return (
    <div className="about-company">
      <div className="company">
       <h2>Компания «ТЕХНОМАРТ»</h2>
       <p className="text1">Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров для ремонта
       и строительства не оставит равнодушным любителей сэкономить на гастарбайтерах.</p>
       <p className="text2">Мы можем доставить ваш товар в самые отдаленные точки России!
       Техномарт работает со многими транспортными компаниями:</p>
       <ul>
         <li>Деловые линии</li>
         <li>Авторейдинг</li>
         <li>ЖелДорЭкспедиция</li>
       </ul>
         <Link to="/company">Подробнее о компании</Link>
      </div>
      <div className="contact">
       <h2>Контакты</h2>
       <p>Вы можете забрать товар сами, заехав в наш офис:</p>
       <a className="maps call-maps"
       href="https://www.google.com/maps/place/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F+%D0%9A%D0%BE%D0%BD%D1%8E%D1%88%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB.,+19,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+191186/@59.9387969,30.3208946,17z/data=!3m1!4b1!4m5!3m4!1s0x4696310fca5ba729:0xea9c53d4493c879f!8m2!3d59.9387942!4d30.3230833?hl=ru-RU">
       <img className="image-map" width="300" height="160" src="img/maps.jpg" alt="карта" /></a>
       <Link className="call-modal1" to="/contacts">заблудились? напишите нам!</Link>
      </div>
    </div>
  )
}

export default Company;
