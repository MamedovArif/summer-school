import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

import './login.css';

class LoginPage extends Component {

  state = {
    email: '',
    password: '',
    notificationError: null
  }

  correctField = (evt) => {
    const value = evt.target.value;
    this.setState({
        [evt.target.name]: value
      })
  }

  componentDidUpdate = (prevProps) => {

    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      console.log('update')
      if (this.props.isLoggedIn === 'error') {
        this.setState({
          notificationError: <p className="error">логин или пароль введены неверно</p>
        })
      }
    }
  }

  handleFocus = () => {
    console.log('focus');
    this.setState({
      notificationError: null
    })
  }

  onNotificationError = () => {
    if (this.props.isLoggedIn === 'error' && this.state.notificationError === null) {
      this.setState({
        notificationError: <p className="error">логин или пароль введены неверно</p>
      })
    }
  }

  render() {
    const {email, password} = this.state;
    let {notificationError} = this.state;
    const {isLoggedIn, onLogin} = this.props;
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
            <input type="email" name="email" onFocus={() => this.handleFocus()}
            onChange={(evt) => this.correctField(evt)}/>
          </label>
        </div>
        <div>
          <label>Пароль
            <input type="password" name="password" onFocus={() => this.handleFocus()}
              onChange={(evt) => this.correctField(evt)}/>
          </label>
        </div>
        <button onClick={() => {
          onLogin(email, password);
          this.onNotificationError();
        }}>Войти</button>
        {notificationError}
      </div>
    )
  }
}

export default LoginPage;
