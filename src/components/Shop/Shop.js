import React, {Component} from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import ProductsHer from "./Products/ProductsHer/ProductsHer";
import ProductsHim from "./Products/ProductsHim/ProductsHim";
import Details from './Details/Details';
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Terms from "../Terms/Terms";
import FAQ from "../FAQ/FAQ";
import NotFound from "../NotFound/NotFound";
import Cart from '../Cart/Cart';

class Shop extends Component {
    render() {
        return (<>
            <HashRouter>
                <Switch>
                    <Route exact path = {'/'} component={LandingPage}/>
                    <Route path = {'/about_me'} component={AboutMe}/>
                    <Route path = {'/contact'} component={Contact}/>
                    <Route path = {'/terms'} component={Terms}/>
                    <Route path = {'/FAQ'} component={FAQ}/>
                    <Route path = {'/shop/cart'} component={Cart}/>
                    <Route path = {'/shop/details'} component={Details}/>
                    <Route path = {'/shop/her'} component={ProductsHer}/>
                    <Route path = {'/shop/him'} component={ProductsHim}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        </>)
    }
}

export default Shop;