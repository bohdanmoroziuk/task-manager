import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import * as serviceWorker from './serviceWorker';

import store from './redux/store';

import App from './components/App';
import ErrorBoundary from './services/ErrorBoundary';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

library.add(faReact);

const Index = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ErrorBoundary>
);

render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
