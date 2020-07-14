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

import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import LogoutPage from '../pages/logout';

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

        moveToBookmarks: this.moveToBookmarks,
        addToCart: this.addToCart,
        deleteFromBookmarks: this.deleteFromBookmarks,
        deleteFromCart: this.deleteFromCart,
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
    const typeButton = { //name
      toCartList: 'cartList',
      toBookmarkList: 'bookmarksList'
    }
    if (this.state.isLoggedIn !== 'entrance') {
      return;
    }
    const str = id.slice(0, 3);
    const mapping = { //name
      per: this.service.getAllPerforators,
      ang: this.service.getAllAngleGrinders,
    }
    let getGoods = mapping[str];


    getGoods()
      .then((goods) => {
        this.setState(({currentUser}) => {

          const newList = currentUser[typeButton[behavior]].slice();
          const addGood = goods.find((item) => { //name
            return item.id === id;
          })
          const copyAddGood = Object.assign({}, addGood, {quantuty: 1}) //name
          const checkRepeatGood = newList.findIndex((item) => {
            return item.id === id
          });
          if (checkRepeatGood === -1) {
            newList.push(copyAddGood);
          } else {
            if (behavior === 'toCartList') {
              newList[checkRepeatGood].quantuty += 1
            }
          }
          return {
            currentUser: Object.assign(currentUser, {[typeButton[behavior]]: newList})
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
      return {
        currentUser: Object.assign(currentUser, {cartList: newCartList}, {bookmarksList: newBookmarksList})
      }
    })
  }

  addToCart = (id) => {
    const {cartList, bookmarksList} = this.state.currentUser;
    const index = bookmarksList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const addCart = bookmarksList[index];
    const newAddCart = Object.assign({}, addCart, {quantuty: 1});

    const repeatGood = cartList.findIndex((item) => {
      return item.id === addCart.id
    })
    let newCartList = [];
    if (repeatGood === -1) {
      newCartList = [].concat(cartList, newAddCart);
    } else {
      newCartList = [].concat(cartList)
    }
    const newBookmarksList = [].concat(bookmarksList.slice(0, index), bookmarksList.slice(index + 1));
    this.setState(({currentUser}) => {
      return {
        currentUser: Object.assign(currentUser, {cartList: newCartList}, {bookmarksList: newBookmarksList})
      }
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
      return {
        currentUser: Object.assign(currentUser, {bookmarksList: newBookmarksList})
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
