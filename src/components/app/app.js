import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';

import {ServiceContext} from '../../index.js';

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

import SpecialOffers from '../pages/catalog/special-offers';
import Materials from '../pages/catalog/materials';
import Technic from '../pages/catalog/technic';
import Tool from '../pages/catalog/tool';

import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import LogoutPage from '../pages/logout';

import './app.css';

const App = () => {
  const service = useContext(ServiceContext);
  return (
    <div className="technomart-app">
      <Header/>
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
          render={() => {
            return <PerforatorList getData={service.getAllPerforators}/>}}
            exact/>
          <Route path="/catalog/tool/perforators/:id" render={({match}) => {
              const { id } = match.params;
              return <PerforatorDetails itemId={id}/>
            }}/>

          <Route path="/catalog/tool/angle-grinders/"
          render={() => {
            return <AngleGrinderList getData={service.getAllAngleGrinders}/>}}
            exact/>
          <Route path="/catalog/tool/angle-grinders/:id" render={({match, location, history}) => {
              const { id } = match.params;
              return <AngleGrinderDetails itemId={id}/>
            }}/>

          <Route path="/bookmarks" component={BookmarksPage} exact/>
          <Route path="/bookmarks/cart" component={CartPage} exact/>
          <Route path="/bookmarks/cart/place-your-order"
            exact component={OrderPage} />

          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/logout" component={LogoutPage} />

          <Route render={() => <h2>Извините, такой страницы не существует</h2>} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
//push splice forEach find sort
//map filter reduce slice concat ...props
