import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from '../components/Header';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Product from '../pages/Product';

function Navbar() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar
