import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../header';
import Main from '../pages/main';
import Catalog from '../pages/catalog';
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

import './app.css';

export default class App extends Component {

  state = {
    counterCart: 0,
    counterBookmarks: 0,
    cartList: [],
    bookmarksList: [],
    funcs: {}
  }

  componentDidMount = () => {
    this.setState({
      funcs: {
        correctCounterCart: this.correctCounterCart,
        correctCounterBookmarks: this.correctCounterBookmarks
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

  render() {
    const {counterCart, counterBookmarks, cartList} = this.state;
    return (
      <ServiceProvider value={this.service}>
        <Router>
          <div className="technomart-app">
            <Header counterCart={counterCart} counterBookmarks={counterBookmarks}/>
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


                <Route path="/place-your-order" render={() => {
                  return <h2>place your order</h2>
                }} />

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
