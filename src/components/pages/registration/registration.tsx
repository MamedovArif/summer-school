import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {registrationProcess} from '../../../actions'

import './registration.css';

import {IsRegistration, MainState} from '../../../types';

type OnRegistration = (name: string, phone: string, email: string,
        password: string) => MainState;

type PropsRegistrationPage = {
  isRegistration: IsRegistration,
  onRegistration: OnRegistration
}

type StateRegistrationPage = {
  [key: string]: any,
  name: string,
  phone: string,
  email: string,
  password: string,
  notificationName: null | React.ReactElement,
  notificationEmail: null | React.ReactElement,
  notificationPassword: null | React.ReactElement,
  notificationPhone: null | React.ReactElement
}

type Action = {
  type: string,
  name: string,
  phone: string,
  email: string,
  password: string
}

class RegistrationPage extends Component<PropsRegistrationPage, StateRegistrationPage> {

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

  private nameElement = React.createRef<HTMLInputElement>();
  private phoneElement = React.createRef<HTMLInputElement>();
  private emailElement = React.createRef<HTMLInputElement>();
  private passwordElement = React.createRef<HTMLInputElement>();

  private realNameElement = this.nameElement.current;
  private realPhoneElement = this.phoneElement.current;
  private realEmailElement = this.emailElement.current;
  private realPasswordElement = this.passwordElement.current;

  handleValidation = (onRegistration: OnRegistration, name: string,
      phone: string, email: string, password: string) => {
    //const styles:React.CSSProperties = { border: '2px solid tomato' };
    if (name.length < 4) {
      if (this.realNameElement) {
        this.realNameElement.classList.add('error');//style = 'border: 2px solid tomato;';
      }
      this.setState({
        notificationName: <p className="validation-registration">Имя слишком короткое, введите не менее 4-ех символов</p>
      })
      return;
    }
    if (phone.length < 10 || isNaN(Number(phone))) {
      if (this.realPhoneElement) {
        this.realPhoneElement.classList.add('error');
      }
      this.setState({
        notificationPhone: <p className="validation-registration">Не корректный номер телефона</p>
      })
      return;
    }
    if (!email.includes('@') && (!email.endsWith('ya.ru') || !email.endsWith('yandex.ru') ||
      !email.endsWith('gmail.com') || !email.endsWith('mail.ru') || !email.endsWith('list.ru') ||
      !email.endsWith('outlook.com'))) {
      if (this.realEmailElement) {
        this.realEmailElement.classList.add('error');
      }
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
      if (this.realPasswordElement) {
        this.realPasswordElement.classList.add('error');
      }
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


  deleteValidity = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      notificationName: null,
      notificationEmail: null,
      notificationPhone: null,
      notificationPassword: null,
    });
    if (this.realNameElement && this.realPhoneElement && this.realEmailElement &&
        this.realPasswordElement) {
      this.realNameElement.classList.remove('error');
      this.realPhoneElement.classList.remove('error');
      this.realEmailElement.classList.remove('error');
      this.realPasswordElement.classList.remove('error');
    }
  }


  correctField = (evt: React.ChangeEvent<HTMLInputElement>) => {
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
          <input type="text" name="name" maxLength={15} onFocus={this.deleteValidity}
            autoComplete="off" ref={this.nameElement}
            onChange={(evt) => this.correctField(evt)}
            placeholder="Albert"/>
        </label>
        {notificationName}
        <label>Моб. телефон
          <input type="tel" name="phone" onFocus={this.deleteValidity} maxLength={10}
          autoComplete="off" ref={this.phoneElement}
          onChange={(evt) => this.correctField(evt)}
          placeholder="9305550555"/>
        </label>
        {notificationPhone}
        <label>Email
          <input type="email" name="email" onFocus={this.deleteValidity}
          autoComplete="off" ref={this.emailElement}
          onChange={(evt) => this.correctField(evt)}
          placeholder="example@gmail.com"/>
        </label>
        {notificationEmail}
        <label>Пароль
          <input type="password" name="password" onFocus={this.deleteValidity}
          autoComplete="off" ref={this.passwordElement}
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

const mapStateToProps = (state: MainState) => {
  return {
    isRegistration: state.isRegistration
  }
}

const mapDispatchToProps = (dispatch: (arg: Action) => MainState): Object => {
  return {
    onRegistration: (name: string, phone: string, email: string,
        password: string) => dispatch(
      registrationProcess(name, phone, email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
