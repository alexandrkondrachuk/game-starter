import React from 'react';
import { Route } from 'react-router-dom';
import * as _ from 'lodash';
import { Home, Auth, Desktop, Mobile, Issue, Inaction, Maintenance } from '../containers/pages';
import config from '../config';

const urls = _.get(config, 'apiURLs');

// Main routes
const routes = [
    {
        id: 0,
        path: _.get(urls, 'home'),
        component: Home,
        exact: true,
    },
    {
        id: 1,
        path: _.get(urls, 'auth'),
        component: Auth,
        exact: true,
    },
    {
        id: 2,
        path: _.get(urls, 'desktop'),
        component: Desktop,
        exact: true,
    },
    {
        id: 3,
        path: _.get(urls, 'mobile'),
        component: Mobile,
        exact: true,
    },
    {
        id: 4,
        path: _.get(urls, 'issue'),
        component: Issue,
        exact: true,
    },
    {
        id: 5,
        path: _.get(urls, 'maintenance'),
        component: Maintenance,
        exact: true,
    },
    {
        id: 6,
        path: _.get(urls, 'inaction'),
        component: Inaction,
        exact: true,
    },
];

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    const { path } = route;
    return (
        <Route
            path={path}
            render={(props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export {
    routes,
    RouteWithSubRoutes,
};
