import React from 'react';
import config from 'react-global-configuration';
import { routes, RouteWithSubRoutes } from '../../routes';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <div className="App">
            <section className="route-section">
                <Router>
                    <Switch>
                        {routes.map((route) => (
                            <RouteWithSubRoutes key={route.id} {...route} />
                        ))}
                        <Redirect from="*" to={config.get('apiURLs.home')} />
                    </Switch>
                </Router>
            </section>
        </div>
    );
}

export default App;
