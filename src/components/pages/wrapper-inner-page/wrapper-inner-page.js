import React from 'react';

import './inner-page.css';

import { Link } from 'react-router-dom';

const wrapperInnerPage = (View, array) => {
  return (props) => {
    const links = array.map((item) => {
      return (
        <li key={item.title}>
          <Link to={`/${item.path}`}>{item.title}</Link>
        </li>
      )
    })
    const h1Title = <h1>{array[array.length - 1].title}</h1>

    return (
      <main className="inner-page">
        <div className="inner-page-container">
          <ul className="breadcrumbs">
            <li key='main'>
              <Link className="icon-home" to="/">
                <span className="visually-hidden">Главная</span>
              </Link>
            </li>
            {links}
          </ul>
          <div className="catalogh1">{h1Title}</div>
          <View {...props}/>
        </div>
      </main>
    )
  }
}

export {wrapperInnerPage};
