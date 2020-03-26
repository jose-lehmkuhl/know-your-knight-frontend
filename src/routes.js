import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'

import Home from './pages/Home'
import Help from './pages/Help'
import Board from './pages/Board'

export default () => (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/help" component={Help} />
    </Switch>
    </BrowserRouter>
)
