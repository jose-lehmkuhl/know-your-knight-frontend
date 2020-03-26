import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

export default () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
    </BrowserRouter>
)
