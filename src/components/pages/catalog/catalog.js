import React from 'react';

import { Link } from 'react-router-dom';

import './catalog.css';

const Catalog = () => {
  return (
    <main className="inner-page">
      <ul>
        <li><Link to="/catalog/special-offers">Спецпредложения</Link></li>
        <li><Link to="/catalog/technic">Техника</Link></li>
        <li><Link to="/catalog/tool">Инструмент</Link></li>
        <li><Link to="/catalog/materials">Материалы</Link></li>
      </ul>
    </main>
  )
}

export default Catalog;
