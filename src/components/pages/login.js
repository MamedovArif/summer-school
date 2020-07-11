import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {

  state = {
    login: '',
    password: ''
  }

  correctField = (evt) => {
    const value = evt.target.value;
    this.setState({
      login: value
    })
  }

  render() {
    const {login, password} = this.state;
    const {isLoggedIn, onLogin} = this.props;
    if (isLoggedIn) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <label>Логин
          <input type="text" onChange={(evt) => this.correctField(evt)}/>
        </label>
        <label>Пароль
          <input type="password" onChange={(evt) => this.correctField(evt)}/>
        </label>
        <button onClick={() => onLogin(login, password)}>Войти</button>
      </div>
    )
  }
}

export default LoginPage;


// <p>войдите пожалуйста или зарегистрируйтесь</p>
//       <label>Имя
//         <input type="text"/>
//       </label>
//       <label>Моб. телефон
//         <input />
//       </label>
//       <label>Email
//         <input />
//       </label>
