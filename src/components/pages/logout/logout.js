import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {logoutProcess} from '../../../actions';

import './logout.css';

const LogoutPage = ({onLogout, isLoggedIn}) => {
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

const mapStateToProps = ({isLoggedIn}) => {
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: (event) => dispatch(logoutProcess(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
