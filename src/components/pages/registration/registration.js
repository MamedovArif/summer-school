import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

import {registrationProcess} from '../../../actions'

import './registration.css';

class RegistrationPage extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    notificationName: null,
    notificationEmail: null,
    notificationPassword: null,
    notificationPhone: null
  }

  handleValidation = (onRegistration, name, phone, email, password) => {
    const page = ReactDOM.findDOMNode(this);
    const nameElement = page.querySelector('input[name = name]');
    const phoneElement = page.querySelector('input[name = phone]');
    const emailElement = page.querySelector('input[name = email]');
    const passwordElement = page.querySelector('input[name = password]');
    if (name.length < 4) {
      nameElement.style = 'border: 2px solid tomato;';
      this.setState({
        notificationName: <p className="validation-registration">Имя слишком короткое, введите не менее 4-ех символов</p>
      })
      return;
    }
    if (phone.length < 10 || isNaN(Number(phone))) {
      phoneElement.style = 'border: 2px solid tomato;';
      this.setState({
        notificationPhone: <p className="validation-registration">Не корректный номер телефона</p>
      })
      return;
    }
    if (!email.includes('@') && (!email.endsWith('ya.ru') || !email.endsWith('yandex.ru') ||
      !email.endsWith('gmail.com') || !email.endsWith('mail.ru') || !email.endsWith('list.ru') ||
      !email.endsWith('outlook.com'))) {
      emailElement.style = 'border: 2px solid tomato;';
      this.setState({
        notificationEmail: <p className="validation-registration">Не корректный адрес электронной почты</p>
      })
      return;
    }

    let upper = false;
    let lower = false;
    let num = false;
    for (let i = 65; i <= 90; i++) {
      if (password.includes(String.fromCodePoint(i))) {
        upper = true;
      };
    }
    for (let i = 97; i <= 122; i++) {
      if (password.includes(String.fromCodePoint(i))) {
        lower = true;
      };
    }
    for (let i = 48; i <= 57; i++) {
      if (password.includes(String.fromCodePoint(i))) {
        num = true;
      };
    }
    if (password.length < 8 || !upper || !lower || !num) {
      passwordElement.style = 'border: 2px solid tomato;';
      this.setState({
        notificationPassword: (
          <p className="validation-registration">
          Кол-во символов должно быть не меньше 8,
          пароль должен содержать заглавные и прописные символы, а также цифры
          </p>
        )
      })
      return;
    }
    onRegistration(name, phone, email, password)
  }

  deleteValidity = () => {
    this.setState({
      notificationName: null,
      notificationEmail: null,
      notificationPhone: null,
      notificationPassword: null,
    });
    const page = ReactDOM.findDOMNode(this);
    const nameElement = page.querySelector('input[name = name]');
    const phoneElement = page.querySelector('input[name = phone]');
    const emailElement = page.querySelector('input[name = email]');
    const passwordElement = page.querySelector('input[name = password]');
    nameElement.style = 'border: 1px solid gray;';
    phoneElement.style = 'border: 1px solid gray;';
    emailElement.style = 'border: 1px solid gray;';
    passwordElement.style = 'border: 1px solid gray;';
  }

  correctField = (evt) => {
    const value = evt.target.value;
    this.setState({
        [evt.target.name]: value
      })
  }

  render() {
    const {name, phone, email, password, notificationName,
      notificationEmail, notificationPassword, notificationPhone} = this.state;
    const {isRegistration, onRegistration} = this.props;
    if (isRegistration === 'yes') {
      return <Redirect to='/catalog' />
    }
    const employment = isRegistration === 'error' ?
      <p>указанный логин занят</p> : null;

    return (
      <div className="registration-page">
        <p>если вы уже зарегистрированы,
        то перейдите на страницу <Link to='/login'>входа</Link></p>
        <label>Имя
          <input type="text" name="name" maxLength='15' onFocus={this.deleteValidity}
            autoComplete="off"
            onChange={(evt) => this.correctField(evt)}
            placeholder="Albert"/>
        </label>
        {notificationName}
        <label>Моб. телефон
          <input type="tel" name="phone" onFocus={this.deleteValidity} maxLength='10'
          autoComplete="off"
          onChange={(evt) => this.correctField(evt)}
          placeholder="9305550555"/>
        </label>
        {notificationPhone}
        <label>Email
          <input type="email" name="email" onFocus={this.deleteValidity}
          autoComplete="off"
          onChange={(evt) => this.correctField(evt)}
          placeholder="example@gmail.com"/>
        </label>
        {notificationEmail}
        <label>Пароль
          <input type="password" name="password" onFocus={this.deleteValidity}
          autoComplete="off"
          onChange={(evt) => this.correctField(evt)}
          placeholder="********"/>
        </label>
        {notificationPassword}
        <button onClick={() => {
          this.handleValidation(onRegistration, name, phone, email, password)
        }}>
          зарегистрироваться
        </button>
        {employment}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRegistration: state.isRegistration
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegistration: (name, phone, email, password) => dispatch(
      registrationProcess(name, phone, email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
