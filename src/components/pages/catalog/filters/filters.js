import React from 'react';

import './filters.css';

const Filters = () => {
  return (
    <section className="filter-catalog">
      <div className="filterh2"><p className="filter-headline">Фильтр:</p></div>
      <form method="get" action="https://echo.htmlacademy.ru">
         <fieldset className="toddler-container">
           <h2 className="range-title">
             Цена:<span className="visually-hidden">в рублях</span>
           </h2>
           <div className="scale">
              <div className="range-scale">
                  <div className="range-bar"></div>
              </div>
           </div>
           <div className="output-container">
              <input className="range-outputmin" name="mean-min" type="text" defaultValue="0" />
              <input className="range-outputmax" name="mean-max" type="text" defaultValue="30000" />
           </div>
         </fieldset>
         <div className="manufacturer">
           <fieldset >
              <legend>Производители:</legend>
              <ul>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox" defaultChecked name="bosch" id="bosch" />
                  <label className="checkbox" htmlFor="bosch">BOSCH</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox" name="interskol" id="interskol" />
                  <label className="checkbox" htmlFor="interskol">ИНТЕРСКОЛ</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox" defaultChecked name="makita" id="makita" />
                  <label className="checkbox" htmlFor="makita">MAKITA</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox" name="dewalt" id="dewalt" />
                  <label className="checkbox" htmlFor="dewalt">DEWALT</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox" name="hitachi" id="hitachi" />
                  <label className="checkbox" htmlFor="hitachi">HITACHI</label>
                 </li>
              </ul>
           </fieldset>
         </div>
         <div className="supply">
           <fieldset>
              <legend>Питание:</legend>
              <ul>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-radio" type="radio" defaultChecked name="networking" id="rechargeable" />
                  <label className="radio" htmlFor="rechargeable">Аккумуляторные</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-radio disabled" type="radio" name="networking" id="networking" />
                  <label className="radio" htmlFor="networking">Сетевые</label>
                 </li>
              </ul>
           </fieldset>
           <button className="show" type="submit">Показать</button>
         </div>
      </form>
    </section>
  )
}

export default Filters;
