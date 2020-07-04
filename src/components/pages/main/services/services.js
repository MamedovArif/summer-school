import React from 'react';

import { Link } from 'react-router-dom';

import './services.css';

const Services = () => {
  return (
    <div className="out-servis">
      <section className="servis">
       <div className="servis-container">
         <h2>Сервисы</h2>
         <p>Хороший интернет-магазин отличается от плохого не только ценами!
         Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.</p>
       </div>
       <div className="servis-slide">
         <ul className="servis-menu">
          <li><button>Доставка</button></li>
          <li><button className="noted">Гарантия</button></li>
          <li><button >Кредит</button></li>
         </ul>
         <ul className="servis-content">
        <li className="transfer ">
            <h2 className="transfer-headline">Доставка</h2>
          <p className="transfer-description">Мы с удовольствием доставим ваш товар прямо <br />
          к вашему подъезду совершенно бесплатно!
          Ведь мы неплохо заработаем,<br /> поднимая его на ваш этаж!</p>
          </li>
          <li className="guarantee hidden">
            <h2 className="guarantee-headline">Гарантия</h2>
            <p className="guarantee-description">Если купленный у нас товар поломается или заискрит,<br />
            а также в случае пожара, спровоцированного его возгоранием, вы всегда можете быть уверены
            в нашей гарантии. Мы обменяем сгоревший товар на новый.<br/>
            Дом уж восстановите как-нибудь сами.</p>
          </li>
          <li className="credit hidden">
            <h2 className="credit-headline">Кредит</h2>
            <p className="credit-description">Залезть в долговую яму стало проще!<br/>
            Кредитные консультанты придут вам на помощь.</p>
            <Link className="credit-button" to="/contacts">Отправить заявку</Link>
          </li>
         </ul>
       </div>
      </section>
    </div>
  )
}

export default Services;
