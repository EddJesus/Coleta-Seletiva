import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home/index";
import CreateLocation from "./pages/CreateLocation/index";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route  component={Home} path="/" exact />
            <Route  component={CreateLocation} path="/create-location" exact />
        
        </BrowserRouter>
    );
}

export default Routes;