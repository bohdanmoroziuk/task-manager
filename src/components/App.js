import React from 'react';

import Brand from './Brand';
import Navbar from './Navbar';
import RouterOutlet from '../services/RouterOutlet';

import routes from '../routes';

const App = () => (
    <div className="app">
        <Navbar>
            <Brand />
        </Navbar>

        <div className="container mt-5">
            <RouterOutlet routes={routes} />
        </div>
    </div>
);

export default App;