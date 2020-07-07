import React, { Component } from 'react';

import Header from '../header';
import Main from '../pages/main';
import Catalog from '../pages/catalog';
import Good from '../good';
import {PerforatorDetails} from '../app-components';
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
//import AngleGrinders from '../pages/catalog/tool';

import {ServiceProvider} from '../service-context';

import './app.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends Component {

  service = new MockService();

  render() {
    return (
      <ServiceProvider value={this.service}>
        <Router>
          <div className="technomart-app">
            <Header />

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


                <Route path="/buy" render={() => {
                  return <h2>Buy</h2>
                }} />
                <Route path="/bookmarks" render={() => {
                  return <h2>Bookmarks</h2>
                }} />
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


            <Footer />
          </div>
        </Router>
      </ServiceProvider>
    );
  }
}
