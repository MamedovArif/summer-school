import React from 'react';

import './filters.css';

const Filters = (props) => {
  return (
    <section className="filter-catalog">
      <div className="filterh2"><p className="filter-headline">Фильтры:</p></div>
      <form method="get" action="https://echo.htmlacademy.ru">
         <div className="manufacturer">
           <fieldset >
              <legend>Производители:</legend>
              <ul>
                 <li className="filter-option">
                  <input onChange={props.handleCheckbox}
                    className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="bosch" id="bosch" />
                  <label className="checkbox" htmlFor="bosch">BOSCH</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="interskol" id="interskol" />
                  <label className="checkbox" htmlFor="interskol">ИНТЕРСКОЛ</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="makita" id="makita" />
                  <label className="checkbox" htmlFor="makita">MAKITA</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="dewalt" id="dewalt" />
                  <label className="checkbox" htmlFor="dewalt">DEWALT</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="hitachi" id="hitachi" />
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
                  <input className="visually-hidden filter-input-radio" type="radio" name="networking" id="rechargeable" />
                  <label className="radio" htmlFor="rechargeable">Аккумуляторные</label>
                 </li>
                 <li className="filter-option">
                  <input className="visually-hidden filter-input-radio disabled"
                  type="radio" name="networking" id="networking"
                  defaultChecked/>
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
