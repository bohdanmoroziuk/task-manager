import React from 'react';

import { Layout } from './layout';
import RouterOutlet from '../services/RouterOutlet';

import routes from '../routes';

const App = () => (
    <div className="app">
        <Layout>
            <RouterOutlet routes={routes} />
        </Layout>
    </div>
);

export default App;