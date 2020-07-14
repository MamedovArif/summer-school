import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

import ReactDOM from 'react-dom';

import './registration.css';

class RegistrationPage extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    notificationName: null,
  }



  componentDidUpdate = () => {

  }

  handleValidation = (onRegistration, name, phone, email, password) => {
    const {notificationName} = this.state;
    const page = ReactDOM.findDOMNode(this);
    const nameElement = page.querySelector('input[name = name]');
    console.log(nameElement);
    if (this.state.name.length < 4) {
      nameElement.style = 'border: 2px solid tomato;';
      this.setState({
        notificationName: <p className="validation-registration">Имя слишком короткое, введите не менее 4-ех символов</p>
      })
      return;
    }
    onRegistration(name, phone, email, password)
  }

  deleteValidity = () => {
    this.setState({
      notificationName: null,
    })
  }

  correctField = (evt) => {
    const value = evt.target.value;
    this.setState({
        [evt.target.name]: value
      })
  }

  render() {
    const {name, phone, email, password, notificationName} = this.state;
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
            onChange={(evt) => this.correctField(evt)} />
        </label>
        {notificationName}
        <label>Моб. телефон
          <input type="tel" name="phone" onChange={(evt) => this.correctField(evt)} />
        </label>
        <label>Email
          <input type="email" name="email" onChange={(evt) => this.correctField(evt)}/>
        </label>
        <label>Пароль
          <input type="password" name="password" onChange={(evt) => this.correctField(evt)}/>
        </label>
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

export default RegistrationPage;
