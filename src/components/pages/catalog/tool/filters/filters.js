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
                  <input onChange={props.handleCheckbox}
                    className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="metabo" id="metabo" />
                  <label className="checkbox" htmlFor="metabo">METABO</label>
                 </li>
                 <li className="filter-option">
                  <input onChange={props.handleCheckbox}
                    className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="makita" id="makita" />
                  <label className="checkbox" htmlFor="makita">MAKITA</label>
                 </li>
                 <li className="filter-option">
                  <input onChange={props.handleCheckbox}
                    className="visually-hidden filter-input-checkbox" type="checkbox"
                    defaultChecked name="dewalt" id="dewalt" />
                  <label className="checkbox" htmlFor="dewalt">DEWALT</label>
                 </li>
                 <li className="filter-option">
                  <input onChange={props.handleCheckbox}
                    className="visually-hidden filter-input-checkbox" type="checkbox"
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
                  <input onChange={props.handleRadio}
                  className="visually-hidden filter-input-radio"
                  type="radio" name="networking" id="accumulator" />
                  <label className="radio" htmlFor="accumulator">Аккумуляторные</label>
                 </li>
                 <li className="filter-option">
                  <input onChange={props.handleRadio}
                  className="visually-hidden filter-input-radio disabled"
                  type="radio" name="networking" id="electronetwork"
                  defaultChecked/>
                  <label className="radio" htmlFor="electronetwork">Сетевые</label>
                 </li>
              </ul>
           </fieldset>
         </div>
      </form>
    </section>
  )
}

export default Filters;
