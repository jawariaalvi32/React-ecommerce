import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from '../components/Header';
import Home from '../pages/Home';
import Product from '../pages/Product';

function Navbar() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/products/category">
                    <Product />
                </Route>
                {/* <Route path="/products/category/jewelery">
                    <Product />
                </Route>
                <Route path="/products/category/electronics">
                    <Product />
                </Route>
                <Route path="/products/category/men%20clothing">
                    <Product />
                </Route>
                <Route path="/products/categorywo/men%20clothing">
                    <Product />
                </Route> */}
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar
