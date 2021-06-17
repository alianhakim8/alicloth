import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from '../components/home/Home';
import Detail from '../components/product/Detail';

const RouterLink = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={Detail} exact />
        </Switch>
    )
};

export default RouterLink;