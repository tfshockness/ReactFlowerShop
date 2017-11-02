import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/shop/Home';
import Categories from './components/shop/Categories';
import CartSidebar from './components/layout/CartSidebar';
import Cart from './components/shop/Cart';
import NotFound from './components/NotFound';
import showProduct from './components/shop/showProduct';

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <CartSidebar />
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/categories" component={ Categories } />
                    <Route path="/cart" component={ Cart } />
                    <Route path="/product/:product" component={showProduct} />
                    <Route component={ NotFound } />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
)};

export default Routes;