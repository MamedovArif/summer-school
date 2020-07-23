import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //для store
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import MockService from './services/mock-service';
import {ServiceProvider} from './components/service-context';

import store from './store.js';

const service = new MockService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider value={service}>
        <Router>
          <App />
        </Router>
      </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'));
