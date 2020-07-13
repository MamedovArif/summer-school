import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

class RegistrationPage extends Component {

  state = {
    name: '',
    phone: '',
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
    const {name, phone, login, password} = this.state;
    const {isRegistration, onRegistration} = this.props;
    if (isRegistration === 'yes') {
      return <Redirect to='/catalog' />
    }
    const employment = isRegistration === 'error' ?
      <p>указанный логин занят</p> : null

    return (
      <div>
        <p>если вы уже зарегистрированы,
        то перейдите на страницу <Link to='/login'>входа</Link></p>
        <label>Имя
          <input type="text" name="name" onChange={(evt) => this.correctField(evt)} />
        </label>
        <label>Моб. телефон
          <input type="tel" name="phone" onChange={(evt) => this.correctField(evt)} />
        </label>
        <label>Логин
          <input type="text" name="login" onChange={(evt) => this.correctField(evt)}/>
        </label>
        <label>Пароль
          <input type="text" name="password" onChange={(evt) => this.correctField(evt)}/>
        </label>
        <button onClick={() => onRegistration(name, phone, login, password)}>
          зарегистрироваться
        </button>
        {employment}
      </div>
    )
  }
}

export default RegistrationPage;
