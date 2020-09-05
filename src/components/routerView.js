import React from 'react';
import {useRoutes} from 'hookrouter';
import Home from '../views/Home';
import About from '../views/About';
import FAQ from '../views/FAQ';
import useScroll from '../customhooks/detectScroll';
import useDevice from '../customhooks/detectDevice';

const routes = {
    '/': () => <Home/>,
    '/about': () => <About/>,
    '/about/company': () => <About/>,
    '/FAQ': () => <FAQ/>,
};

const RouterView = props => {
    const routeResult = useRoutes(routes);
    const isMobile = useDevice(768);
    const [scrollPos, barVisi] = useScroll()
    return (<div style={{marginTop:isMobile?60:100, transition:'1s'}}>{routeResult}</div>);
}

export default RouterView;