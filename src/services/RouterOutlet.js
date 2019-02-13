import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '../components/Loader';

const RouterOutlet = ({ routes }) => (
    <Suspense fallback={<Loader />}>
        <Switch>
            {routes && routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </Switch>
    </Suspense>
);

export default RouterOutlet;