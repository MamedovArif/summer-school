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
//import {wrapperInnerPage} from '../pages/wrapper-inner-page';

import './app.css';

export default class App extends Component {

  state = {
    cartList: [],
    bookmarksList: [],
    funcs: {}
  }

  componentDidMount = () => {
    this.setState({
      funcs: {
        correctCounterCart: this.correctCounterCart,
        correctCounterBookmarks: this.correctCounterBookmarks,
        deleteFromCart: this.deleteFromCart,
        moveToBookmarks: this.moveToBookmarks,
        addToCart: this.addToCart,
        deleteFromBookmarks: this.deleteFromBookmarks
      }
    })
  }

  service = new MockService();

  correctCounterCart = (id) => {
    const str = id.slice(0, 3);
    const mapping = { // move to utils
      per: this.service.getAllPerforators,
      ang: this.service.getAllAngleGrinders,
    }
    let getGoods = mapping[str];
    getGoods()
      .then((goods) => {
        this.setState(({counterCart, cartList}) => {

          const newList = cartList.slice();
          const addGood = goods.find((item) => {
            return item.id === id;
          })
          newList.push(addGood);
          console.log(newList);
          return {
            counterCart: counterCart + 1,
            cartList: newList
          }
        })
      })
  }

  correctCounterBookmarks = (id) => {
    const str = id.slice(0, 3);
    const mapping = { // move to utils
      per: this.service.getAllPerforators,
      ang: this.service.getAllAngleGrinders,
    }
    let getGoods = mapping[str];
    getGoods()
      .then((goods) => {
        this.setState(({counterBookmarks, bookmarksList}) => {

          const newList = bookmarksList.slice();
          const addGood = goods.find((item) => {
            return item.id === id;
          })
          newList.push(addGood);
          console.log(newList);
          return {
            counterBookmarks: counterBookmarks + 1,
            bookmarksList: newList
          }
        })
      })
  }

  deleteFromCart = (id) => {
    const {cartList} = this.state;
    const index = cartList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('cart-page см button "удалить из корзины"')
    }
    const newCartList = [].concat(cartList.slice(0, index), cartList.slice(index + 1));
    console.log(newCartList)
    this.setState({
      cartList: newCartList
    })
  }

  moveToBookmarks = (id) => {
    const {cartList, bookmarksList} = this.state;
    const index = cartList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const addBookmarks = cartList[index];
    const newCartList = [].concat(cartList.slice(0, index), cartList.slice(index + 1));
    const newBookmarksList = [].concat(bookmarksList, addBookmarks);
    this.setState({
      cartList: newCartList,
      bookmarksList: newBookmarksList
    })
  }

  addToCart = (id) => {
    const {cartList, bookmarksList} = this.state;
    const index = bookmarksList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const addCart = bookmarksList[index];
    const newBookmarksList = [].concat(bookmarksList.slice(0, index), bookmarksList.slice(index + 1));
    const newCartList = [].concat(cartList, addCart);
    this.setState({
      cartList: newCartList,
      bookmarksList: newBookmarksList
    })
  }

  deleteFromBookmarks = (id) => {
    const {bookmarksList} = this.state;
    const index = bookmarksList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('')
    }
    const newBookmarksList = [].concat(bookmarksList.slice(0, index), bookmarksList.slice(index + 1));
    this.setState({
      bookmarksList: newBookmarksList
    })
  }

  render() {
    const {cartList, bookmarksList} = this.state;
    return (
      <ServiceProvider value={this.service}>
        <Router>
          <div className="technomart-app">
            <Header quantutyCartList={cartList.length}
              quantutyBookmarksList={bookmarksList.length}/>
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
                  component={OrderPage} exact/>



                <Route path="/authorization/" render={() => {
                  return <h2>authorization/</h2>
                }} />
                <Route path="/registration" render={() => {
                  return <h2>registration</h2>
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
