import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../header';
import Main from '../pages/main';
import Catalog from '../pages/catalog';
import CartPage from '../pages/cart-page';
import BookmarksPage from '../pages/bookmarks-page';
import OrderPage from '../pages/order-page';
import {PerforatorDetails, AngleGrinderDetails} from '../app-components';
import Company from '../pages/company';
import News from '../pages/news';
import Delivery from '../pages/delivery';

import Contacts from '../pages/contacts';
import Footer from '../footer';
import MockService from '../../services/mock-service';

import SpecialOffers from '../pages/catalog/special-offers';
import Materials from '../pages/catalog/materials';
import Technic from '../pages/catalog/technic';
import Tool from '../pages/catalog/tool';
import Perforators from '../pages/catalog/tool/perforators';
import AngleGrinders from '../pages/catalog/tool/angle-grinders';

import {ServiceProvider} from '../service-context';
import {AppStateProvider} from '../app-state-context';

import LoginPage from '../pages/login.js';
import RegistrationPage from '../pages/registration.js';
import LogoutPage from '../pages/logout.js';

import './app.css';

export default class App extends Component {

  state = {
    funcs: {},
    isLoggedIn: 'out',
    isRegistration: 'no',
    currentUser: null, //!!!
    users: [
      {
        name: 'Robert',
        phone: '+7 786 ...',
        login: '',
        password: '',
        cartList: [],
        bookmarksList: [],
      },

      {
        name: 'Bob',
        phone: '+7 786 ...',
        login: 'example',
        password: '123a',
        cartList: [],
        bookmarksList: [],
      }
    ]
  }

  onRegistration = (name, phone, login, password) => {
    const {users, currentUser} = this.state;

    const user = users.find((person) => {
      return person.login === login
    });
    if (user) {
      this.setState({
        isRegistration: 'error'
      })
      return;
    }

    const newUser = {
      name,
      phone,
      login,
      password,
      cartList: [],
      bookmarksList: [],
    };
    const updatedUsers = [].concat(users.slice(), newUser);
    this.setState({
      isLoggedIn: 'entrance',
      isRegistration: 'yes',
      currentUser: newUser
    })
  }

  onLogin = (login, password) => {
    const user = this.state.users.find((person) => {
      return person.login === login //сылка на объект из users
    });

    if (!user) {
      this.setState({
        isLoggedIn: 'error'
      })
    } else if (user.password === password) {
      console.log('entrance')
      this.setState({
        isLoggedIn: 'entrance',
        isRegistration: 'yes',
        currentUser: user,
      })
    } else {
      this.setState({
        isLoggedIn: 'error'
      })
    }
  }

  onLogout = (evt) => {
    if (evt.target.textContent === 'нет') {
      return
    }
    this.setState({
      currentUser: null,
      isLoggedIn: 'out',
      isRegistration: 'no',
    })
  }

  componentDidMount = () => {
    this.setState({
      funcs: {
        correctCounterCart: this.correctCounterCart,
        correctCounterBookmarks: this.correctCounterBookmarks,
        deleteFromCart: this.deleteFromCart,
        moveToBookmarks: this.moveToBookmarks,
        addToCart: this.addToCart,
        deleteFromBookmarks: this.deleteFromBookmarks,
        increaseQuantuty: this.increaseQuantuty,
        reduceQuantuty: this.reduceQuantuty
      }
    })
  }

  reduceQuantuty = (id) => {
    this.setState(({currentUser}) => {
      const {cartList} = currentUser;
      const index = cartList.findIndex((item) => {
        return item.id === id
      })
      const newCartList = cartList.slice();
      if (newCartList[index].quantuty > 1) {
        newCartList[index].quantuty -= 1;
      } else {
        newCartList.splice(index, 1)
      }
      return {
        currentUser: Object.assign(currentUser, {cartList: newCartList})
      }
    })
  }

  increaseQuantuty = (id) => {
    this.setState(({currentUser}) => {
      const {cartList} = currentUser;
      const index = cartList.findIndex((item) => {
        return item.id === id
      })
      const newCartList = cartList.slice();
      newCartList[index].quantuty += 1;
      return {
        currentUser: Object.assign(currentUser, {cartList: newCartList})
      }
    })
  }

  service = new MockService();

  correctCounterCart = (id) => { //КНОПКА КУПИТЬ
    if (this.state.isLoggedIn !== 'entrance') {
      return;
    }
    const str = id.slice(0, 3);
    const mapping = { // move to utils
      per: this.service.getAllPerforators,
      ang: this.service.getAllAngleGrinders,
    }
    let getGoods = mapping[str];
    getGoods()
      .then((goods) => {
        this.setState(({currentUser}) => {

          const newList = currentUser.cartList.slice();
          const addGood = goods.find((item) => {
            return item.id === id;
          })
          const copyAddGood = Object.assign({}, addGood, {quantuty: 1})//zero
          const repeatGood = newList.findIndex((item) => {
            return item.id === id
          });
          if (repeatGood === -1) {
            newList.push(copyAddGood);
          } else {
            newList[repeatGood].quantuty += 1
          }
          return {
            currentUser: Object.assign(currentUser, {cartList: newList})
          }
        })
      })
  }

  correctCounterBookmarks = (id) => { //КНОПКА "В ЗАКЛАДКИ"
    if (this.state.isLoggedIn !== 'entrance') {
      return;
    }
    const str = id.slice(0, 3);
    const mapping = { // move to utils
      per: this.service.getAllPerforators,
      ang: this.service.getAllAngleGrinders,
    }
    let getGoods = mapping[str];
    getGoods()
      .then((goods) => {
        this.setState(({currentUser}) => {

          const newList = currentUser.bookmarksList.slice();
          //есть ли такой товар уже в закладках
          const addGood = goods.find((item) => {
            return item.id === id;
          })
          const repeatGood = newList.findIndex((item) => {
            return item.id === id
          })
          if (repeatGood === -1) {
            newList.push(addGood);
          }

          return {
            currentUser: Object.assign(currentUser, {bookmarksList: newList})
          }
        })
      })
  }

  deleteFromCart = (id) => {
    const {cartList} = this.state.currentUser;
    const index = cartList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('cart-page см button "удалить из корзины"')
    }
    const newCartList = [].concat(cartList.slice(0, index), cartList.slice(index + 1));
    console.log(newCartList)
    this.setState(({currentUser}) => {
      return {
        currentUser: Object.assign(currentUser, {cartList: newCartList})
      }
    })
  }

  moveToBookmarks = (id) => {
    const {cartList, bookmarksList} = this.state.currentUser;
    const index = cartList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const addBookmarks = cartList[index];
    const repeatGood = bookmarksList.findIndex((item) => {
      return item.id === id
    })
    let newBookmarksList = [];
    if (repeatGood === -1) {
      newBookmarksList = [].concat(bookmarksList, addBookmarks);
    } else {
      newBookmarksList = [].concat(bookmarksList);
    }
    const newCartList = [].concat(cartList.slice(0, index), cartList.slice(index + 1));

    this.setState(({currentUser}) => {
      currentUser: Object.assign(currentUser, {cartList: newCartList}, {bookmarksList: newBookmarksList})
    })
  }

  addToCart = (id) => {
    const {cartList, bookmarksList} = this.state.currentUser;
    const index = bookmarksList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const addCart = bookmarksList[index];

    const repeatGood = cartList.findIndex((item) => {
      return item.id === addCart.id
    })
    let newCartList = [];
    if (repeatGood === -1) {
      newCartList = [].concat(cartList, addCart);
    } else {
      newCartList = [].concat(cartList)
    }
    const newBookmarksList = [].concat(bookmarksList.slice(0, index), bookmarksList.slice(index + 1));
    this.setState(({currentUser}) => {
      currentUser: Object.assign(currentUser, {cartList: newCartList}, {bookmarksList: newBookmarksList})
    })
  }

  deleteFromBookmarks = (id) => {
    const {bookmarksList} = this.state.currentUser;
    const index = bookmarksList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const newBookmarksList = [].concat(bookmarksList.slice(0, index), bookmarksList.slice(index + 1));
    this.setState(({currentUser}) => {
      currentUser: Object.assign(currentUser, {bookmarksList: newBookmarksList})
    })
  }

  render() {
    const {cartList, bookmarksList} = this.state;
    return (
      <ServiceProvider value={this.service}>
        <Router>
          <div className="technomart-app">
            <Header appState={this.state}/>
            <AppStateProvider value={this.state}>
              <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/company" component={Company} />
                <Route path="/news" component={News} />
                <Route path="/delivery" component={Delivery} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/manufacturers" render={() => {
                  return <h2>manufacturers</h2>
                }} />

                <Route path="/catalog" component={Catalog} exact />

                <Route path="/catalog/special-offers" component={SpecialOffers} />
                <Route path="/catalog/materials" component={Materials}/>
                <Route path="/catalog/technic" component={Technic}/>
                <Route path="/catalog/tool" component={Tool} exact/>

                <Route path="/catalog/tool/perforators/"
                component={Perforators} exact/>
                <Route path="/catalog/tool/perforators/:id" render={({match}) => {
                    const { id } = match.params;
                    return <PerforatorDetails itemId={id}/>
                  }}/>

                <Route path="/catalog/tool/angle-grinders/"
                component={AngleGrinders} exact/>
                <Route path="/catalog/tool/angle-grinders/:id" render={({match}) => {
                    const { id } = match.params;
                    return <AngleGrinderDetails itemId={id}/>
                  }}/>

                <Route path="/bookmarks" component= {BookmarksPage} exact/>
                <Route path="/bookmarks/cart" component={CartPage} exact/>
                <Route path="/bookmarks/cart/place-your-order"
                  exact render={() => {
                  return (
                    <OrderPage appState={this.state} />
                  )
                }} />



                <Route path="/login" render={() => {
                  return (
                    <LoginPage isLoggedIn={this.state.isLoggedIn}
                      onLogin={this.onLogin}/>
                  )
                }} />
                <Route path="/registration" render={() => {
                  return (
                    <RegistrationPage isRegistration={this.state.isRegistration}
                      onRegistration={this.onRegistration}/>
                  )
                }} />
                <Route path="/logout" render={() => {
                  return (
                    <LogoutPage appState={this.state} onLogout={this.onLogout}/>
                  )
                }} />

                <Route render={() => <h2>Извините, такой страницы не существует</h2>} />
              </Switch>
            </AppStateProvider>
            <Footer />
          </div>
        </Router>
      </ServiceProvider>
    );
  }
}
