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
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';

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
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar
