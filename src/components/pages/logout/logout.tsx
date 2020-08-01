import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {logoutProcess} from '../../../actions';

import './logout.css';

import {IsLoggedIn, MainState} from '../../../types';

type Action = {
  type: string,
  event: React.MouseEvent<HTMLButtonElement>
}

type PropsLogoutPage = {
  onLogout: (e: React.MouseEvent<HTMLButtonElement>) => MainState,
  isLoggedIn: IsLoggedIn
}

const LogoutPage = ({onLogout, isLoggedIn}: PropsLogoutPage) => {
  if (isLoggedIn === 'out') {
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

const mapStateToProps = ({isLoggedIn}: MainState) => {
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch: (arg: Action) => MainState): Object => {
  return {
    onLogout: (event: React.MouseEvent<HTMLButtonElement>) => dispatch(logoutProcess(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
