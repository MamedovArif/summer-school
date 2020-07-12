import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const LogoutPage = ({onLogout, appState}) => {
  if (appState.isLoggedIn === 'out') {
    return <Redirect to='/' />
  }
  return (
    <div>
      <p>вы действительно хотите выйти?</p>
      <button onClick={(evt) => onLogout(evt)}>да</button>
      <Link to='/'>нет</Link>
    </div>
  )
}

export default LogoutPage;
