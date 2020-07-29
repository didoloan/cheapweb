import React from 'react';
import {useRoutes} from 'hookrouter';
import Home from '../views/Home';
import About from '../views/About';
import FAQ from '../views/FAQ';

const routes = {
    '/': () => <Home/>,
    '/about': () => <About/>,
    '/FAQ': () => <FAQ/>,
};

const RouterView = props => {
    const routeResult = useRoutes(routes);
    return routeResult;
}

export default RouterView;