import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import './App.scss';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import './Shop/Header/logo/logo.scss'
import LandingPage from './LandingPage/LandingPage';
import Shop from './Shop/Shop';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Terms from './Terms/Terms';
import FAQ from './FAQ/FAQ';
import NotFound from './NotFound/NotFound';
import Cart from './Cart/Cart';
import Header from "./Shop/Header/Header";
import Footer from "./Shop/Footer/Footer";
import Modal from './Modal/Modal';

function App() {
  return (
      <HashRouter>
          <Header/>
          <Switch>
              <Route exact path = {'/'} component={LandingPage}/>
              <Route path = {'/shop'} component={Shop}/>
              <Route path = {'/about_me'} component={AboutMe}/>
              <Route path = {'/contact'} component={Contact}/>
              <Route path = {'/terms'} component={Terms}/>
              <Route path = {'/FAQ'} component={FAQ}/>
              <Route path = {'/shop/cart'} component={Cart}/>
              <Route component={NotFound}/>
          </Switch>
          <Modal/>
          <Footer/>
      </HashRouter>
  );
}

export default App;
