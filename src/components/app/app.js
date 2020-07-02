import React, { Component } from 'react';

import Header from '../header';
import Main from '../pages/main';
import Catalog from '../pages/catalog';
import Company from '../pages/company';
import News from '../pages/news';
import Delivery from '../pages/delivery';
import SpecialOffers from '../pages/special-offers';
import Contacts from '../pages/contacts';
import Footer from '../footer';

import './app.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="technomart-app">
          <Header />

            <Route path="/" component={Main} exact />
            <Route path="/company" component={Company} />
            <Route path="/catalog/" component={Catalog} exact />
            <Route path="/catalog/:id"
              render={({match}) => {
                const { id } =match.params;
                return <h2>id = {id}</h2>
              }}/>
            <Route path="/news" component={News} />
            <Route path="/special-offers" component={SpecialOffers} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/contacts" component={Contacts} />

          <Footer />
        </div>
      </Router>
    );
  }
}
