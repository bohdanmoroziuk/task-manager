import React from 'react';

import Layout from './layout/Layout';
import Loader from '../components/shared/Loader';
import RouterOutlet from '../services/RouterOutlet';

import routes from '../routes';

const App = () => (
  <div className="app">
    <Layout>
      <RouterOutlet routes={routes} fallback={<Loader />} />
    </Layout>
  </div>
);

export default App;
