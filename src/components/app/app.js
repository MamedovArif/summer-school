import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../header';
import Main from '../pages/main';
import Catalog from '../pages/catalog';
import CartPage from '../pages/cart-page';
import BookmarksPage from '../pages/bookmarks-page';
import OrderPage from '../pages/order-page';
import {PerforatorDetails, AngleGrinderDetails,
  PerforatorList, AngleGrinderList} from '../app-components';
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

import {ServiceProvider} from '../service-context';
import {AppStateProvider} from '../app-state-context';

import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import LogoutPage from '../pages/logout';

import './app.css';

export default class App extends Component {

  state = {
    funcs: {},
    isLoggedIn: 'out',
    isRegistration: 'no',
    currentUser: null,
    users: [
      {
        name: 'Robert',
        phone: '+7 786 ...',
        email: 'asd',
        password: 'asdi',
        cartList: [
          {
            id: 'per4',
            title: 'Перфоратор',
            brand: 'HITACHI',
            model: 'DH24PH',
            isNew: false,
            initialPrice: 11750,
            price: 10500,
            powerSupply: 'electronetwork',
            isHit: true,
            power: 730,
            numberOfIdle: 1050,
            frequencyOfStrikes: 4500,
            impactEnergy: 2.7,
            weight: 2.7,
            url: `https://avatars.mds.yandex.net/get-mpic/1605421/img_id4263042739453333466.jpeg/9hq`,
            quantuty: 2
          },
        ],
        bookmarksList: [
          {
            id: 'ang25',
            title: 'УШМ',
            brand: 'MAKITA',
            model: 'GA5041R',
            isNew: false,
            initialPrice: null,
            price: 8897,
            powerSupply: 'accumulator',
            isHit: true,
            power: 1100,
            numberOfIdle: 11000,
            maxDiscDiameter: 125,
            weight: 2.4,
            url: `https://avatars.mds.yandex.net/get-mpic/1866031/img_id4984682844879837665.jpeg/orig`
          }
        ],
      },

      {
        name: 'Antony',
        phone: '+7 786 ...',
        email: 'qwe',
        password: 'qwe',
        cartList: [],
        bookmarksList: [],
      }
    ]
  }

  onRegistration = (name, phone, email, password) => {
    const {users} = this.state;

    const user = users.find((person) => {
      return person.email === email
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
      email,
      password,
      cartList: [],
      bookmarksList: [],
    };
    const updatedUsers = [].concat(users.slice(), newUser);
    this.setState({
      isLoggedIn: 'entrance',
      isRegistration: 'yes',
      currentUser: newUser,
      users: updatedUsers
    })
  }

  onLogin = (email, password) => {
    const user = this.state.users.find((person) => {
      return person.email === email //сылка на объект из users
    });

    if (!user) {
      this.setState({
        isLoggedIn: 'error'
      })
    } else if (user.password === password) {
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
        handleClickByCartOfList: this.handleClickByCartOfList,
        counterQuantuty: this.counterQuantuty,
        deleteFromNecessaryList: this.deleteFromNecessaryList,
        moveToNecessaryList: this.moveToNecessaryList
      }
    })
  }

  counterQuantuty = (evt, id) => {
    const behavior = evt.target.name;
    this.setState(({currentUser}) => {
      const {cartList} = currentUser;
      const index = cartList.findIndex((item) => {
        return item.id === id
      })
      const newCartList = cartList.slice();

      if (behavior === 'add') {
        newCartList[index].quantuty += 1
      } else {
        if (newCartList[index].quantuty > 1) {
          newCartList[index].quantuty -= 1
        } else {
          newCartList.splice(index, 1)
        }
      }

      return {
        currentUser: Object.assign(currentUser, {cartList: newCartList})
      }
    })
  }

  service = new MockService();

  handleClickByCartOfList = (evt, id) => { //КНОПКА КУПИТЬ
    const behavior = evt.target.name;
    const dispatcherByTypeButton = {
      byCart: 'cartList',
      byToBookmarks: 'bookmarksList'
    }
    if (this.state.isLoggedIn !== 'entrance') {
      return;
    }
    const str = id.slice(0, 3);
    const dispatcherByTypeId = {
      per: this.service.getAllPerforators,
      ang: this.service.getAllAngleGrinders,
    }
    let getGoods = dispatcherByTypeId[str];


    getGoods()
      .then((goods) => {
        this.setState(({currentUser}) => {

          const newList = currentUser[dispatcherByTypeButton[behavior]].slice();
          const addedProduct = goods.find((item) => {
            return item.id === id;
          })
          const transformAddedProduct = Object.assign({}, addedProduct, {quantuty: 1})
          const checkRepeatGood = newList.findIndex((item) => {
            return item.id === id
          });
          if (checkRepeatGood === -1) {
            newList.push(transformAddedProduct);
          } else {
            if (behavior === 'toCartList') {
              newList[checkRepeatGood].quantuty += 1
            }
          }
          return {
            currentUser: Object.assign(currentUser, {[dispatcherByTypeButton[behavior]]: newList})
          }
        })
      })
  }

  deleteFromNecessaryList = (evt, id) => {
    const behavior = evt.target.name;
    const dispatcher = {
      cart: 'cartList',
      bookmarks: 'bookmarksList'
    }
    const list = this.state.currentUser[dispatcher[behavior]];
    const index = list.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('cart-page см button "удалить из корзины"')
    }
    const newList = [].concat(list.slice(0, index), list.slice(index + 1));
    this.setState(({currentUser}) => {
      return {
        currentUser: Object.assign(currentUser, {[dispatcher[behavior]]: newList})
      }
    })
  }

  moveToNecessaryList = (evt, id) => {
    const behavior = evt.target.name;
    const dispatcherByList = {
      moveFromBookmarks: 'bookmarksList',
      moveFromCart: 'cartList',
    }
    const {currentUser} = this.state;

    const fromList = currentUser[dispatcherByList[behavior]];
    const values = Object.values(dispatcherByList);
    const acceptor = values.find((item) => item !== dispatcherByList[behavior]);
    const toList = currentUser[acceptor];

    const index = fromList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const relocatableItem = fromList[index];
    const isRepeatGood = toList.findIndex((item) => {
      return item.id === id
    })
    let newToList = [];
    if (isRepeatGood === -1) {
      newToList = [].concat(toList, relocatableItem);
    } else {
      newToList = [].concat(toList);
    }
    const newFromList = [].concat(fromList.slice(0, index), fromList.slice(index + 1));

    this.setState(({currentUser}) => {
      return {
        currentUser: Object.assign(currentUser, {[dispatcherByList[behavior]]: newFromList}, {[acceptor]: newToList})
      }
    })
  }

  render() {
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
                component={PerforatorList} exact/>
                <Route path="/catalog/tool/perforators/:id" render={({match}) => {
                    const { id } = match.params;
                    return <PerforatorDetails itemId={id}/>
                  }}/>

                <Route path="/catalog/tool/angle-grinders/"
                component={AngleGrinderList} exact/>
                <Route path="/catalog/tool/angle-grinders/:id" render={({match, location, history}) => {
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

//push splice forEach find sort
//map filter reduce slice concat ...props
