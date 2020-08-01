import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {loginProcess} from '../../../actions';

import './login.css';

import {IsLoggedIn, MainState} from '../../../types';

type PropsLoginPage = {
  isLoggedIn: IsLoggedIn,
  onLogin: (email: string, password: string) => MainState,
}

type Action = {
  type: string,
  email: string,
  password: string
}

const onNotificationError = (isLoggedIn: IsLoggedIn,
    notificationError: Object | null, setNotificationError: Function): void => {
  if (isLoggedIn === 'error' && notificationError === null) {
    setNotificationError(<p className="error">логин или пароль введены неверно</p>)
  }
}

const LoginPage = (props: PropsLoginPage) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notificationError, setNotificationError] = useState<any>(null);

  const {isLoggedIn, onLogin} = props;
  useEffect(() => {
    if (isLoggedIn === 'error') {
      setNotificationError(<p className="error">логин или пароль введены неверно</p>)
    }
  }, [isLoggedIn])


  if (isLoggedIn === 'entrance') {
    return <Redirect to='/bookmarks' />
  }

  return (
    <div className="login-page">
      <p>войдите, пожалуйста, чтобы посмотреть
      свои закладки и корзину или оформить заказ</p>
      <p>если вы не зарегистрированы,
      то перейдите на страницу <b><Link to='/registration'>регистрации</Link></b></p>
      <div>
        <label>Email
          <input type="email" name="email" onFocus={() => setNotificationError(null)}
          onChange={(evt) => setEmail(evt.target.value)}/>
        </label>
      </div>
      <div>
        <label>Пароль
          <input type="password" name="password" onFocus={() => setNotificationError(null)}
            onChange={(evt) => setPassword(evt.target.value)}/>
        </label>
      </div>
      <button onClick={() => {
        onLogin(email, password);
        onNotificationError(isLoggedIn, notificationError, setNotificationError);
      }}>Войти</button>
      {notificationError}
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
    onLogin: (email: string, password: string) => dispatch(loginProcess(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
