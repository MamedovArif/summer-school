import React from 'react';
import { Link } from 'react-router-dom';

import './slide.css';

const Slide: React.FC = () => {
  return (
    <section className="slide">
      <ul>
       <li className="extreme materials">
         <div className="flag flag-new">новинка</div>
         <h3>Материалы</h3>
         <Link to="/catalog/materials">На любой вкус</Link>
       </li>
       <li className="extreme tool">
         <h3>Инструмент</h3>
         <Link className="tool-link" to="/catalog/tool">На все случаи</Link>
       </li>
       <li className="extreme technique">
         <h3>Техника</h3>
         <Link className="technique-link" to="/catalog/technic">Для стройки</Link>
       </li>
       <li className="slider">
         <input type="radio" id="btn-1" name="toggle" defaultChecked />
         <input type="radio" id="btn-2" name="toggle" />
         <div className="slider-controls">
          <label className="but-1 icon-right" htmlFor="btn-1"></label>
          <label className="but-2 icon-left" htmlFor="btn-2"></label>
         </div>
         <div className="slider-inner">
          <div className="slider-slides">
           <div className="slider-slides-first">
            <img className="image1" src="img/slide1.jpg" alt="Дрели" width="620" height="265" />
            <h3 className="header-for-img1">Дрели</h3>
            <p className="paragraph1">Соседям на радость!</p>
       </div>
       <div className="slider-slides-second">
            <img className="image2" src="img/slide2.jpg" alt="Перфораторы" width="620" height="265" />
            <h3 className="header-for-img2">Перфораторы</h3>
            <p className="paragraph2">Настоящие мужские игрушки</p>
           </div>
          </div>
          <Link className="open-catalog" to="/catalog">Открыть каталог</Link>
         </div>
       </li>
       <li className="not-grid">
         <ul>
          <li className="extreme sale">
            <h3>Скидки 50%</h3>
            <Link className="sale-link" to="/catalog/special-offers">На 350 товаров</Link>
          </li>
          <li className="extreme delivery">
             <h3>Доставка</h3>
             <Link className="delivery-link" to="/catalog/delivery">Бесплатно</Link>
          </li>
         </ul>
        </li>
      </ul>
    </section>
  )
}

export default Slide;
