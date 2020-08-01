import React from 'react';

import { Link } from 'react-router-dom';

import './popular-maker.css';

const PopularMaker: React.FC = () => {
  return (
    <section className="popular-maker">
      <div className="upper-container">
       <h2 className="popular-maker-headline">популярные производители:</h2>
       <Link className="all-popular-maker" to="/manufacturers">все производители</Link>
      </div>
      <ul className="main-maker">
       <li>
        <a className="item-maker" href="https://www.bosch.ru/">
           <img className="bosch" src="img/maker/bosch.png" alt="BOSCH"
             width="126" height="37"/>
        </a>
       </li>
       <li>
         <a className="item-maker" href="http://www.makita.ru/">
           <img className="makita" src="img/maker/makita.png" alt="MAKITA" width="123" height="40" />
         </a>
        </li>
       <li>
         <a className="item-maker" href="https://www.dewalt.com/">
           <img className="dewalt" src="img/maker/dewalt.png" alt="DeWalt" width="146" height="44" />
         </a>
       </li>
       <li>
         <a className="item-maker" href="https://www.interskol.ru/">
           <img className="interskol" src="img/maker/interskol.png" alt="Интерскол" width="200" height="88" />
         </a>
       </li>
       <li>
         <a className="item-maker" href="https://www.hitachi.ru/ru">
           <img className="hitachi" src="img/maker/hitachi.png" alt="HITACHI" width="169" height="31" />
         </a>
       </li>
       <li>
         <a className="item-maker" href="https://www.lg.com/ru">
           <img className="lg" src="img/maker/lg.png" alt="LG" width="121" height="73" />
         </a>
       </li>
       <li>
         <a className="item-maker" href="https://www.aeg-powertools.eu/ru-ru">
           <img className="aeg" src="img/maker/aeg.png" alt="AEG" width="151" height="96" />
         </a>
       </li>
       <li>
         <a className="item-maker" href="https://www.metabo.com/ru/ru/">
           <img className="metabo" src="img/maker/metabo.png" alt="metabo" width="204" height="69" />
         </a>
       </li>
      </ul>
    </section>
  )
}

export default PopularMaker;
