import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './logout.css';

const LogoutPage = ({onLogout, appState}) => {
  if (appState.isLoggedIn === 'out') {
    return <Redirect to='/' />
  }
  return (
    <div className="logout-page">
      <p>вы действительно хотите выйти ?</p>
      <button className="button-type button" onClick={(evt) => onLogout(evt)}>да</button>
      <Link className="button-type link" to='/'>нет</Link>
    </div>
  )
}

export default LogoutPage;
