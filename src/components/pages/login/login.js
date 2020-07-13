import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

import './login.css';

class LoginPage extends Component {

  state = {
    login: '',
    password: ''
  }

  correctField = (evt) => {
    const value = evt.target.value;
    this.setState({
        [evt.target.name]: value
      })
  }

  render() {
    const {login, password} = this.state;
    const {isLoggedIn, onLogin} = this.props;
    if (isLoggedIn === 'entrance') {
      return <Redirect to='/bookmarks' />
    }
    const notification = isLoggedIn === 'error' ?
      <p>логин или пароль введены неверно</p> : null //при фокусе убрать

    return (
      <div className="login-page">
        <p>войдите, пожалуйста, чтобы посмотреть
        свои закладки и корзину или оформить заказ</p>
        <p>если вы не зарегистрированы,
        то перейдите на страницу <b><Link to='/registration'>регистрации</Link></b></p>
        <label>Логин
          <input type="text" name="login" onChange={(evt) => this.correctField(evt)}/>
        </label>
        <label>Пароль
          <input type="text" name="password" onChange={(evt) => this.correctField(evt)}/>
        </label>
        <button onClick={() => onLogin(login, password)}>Войти</button>
        {notification}
      </div>
    )
  }
}

export default LoginPage;
