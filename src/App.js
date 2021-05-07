import React, { useEffect } from 'react';
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import Orders from "./Orders"
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



const promise = loadStripe("pk_test_51IhVLxEe22M7SVINA2deUT0H5fAyI99nUQJhYF98olbmnocQxyWH5aVNVXD0CdehmnvjvnmZSTvrNyHotbDavGww00OpTeno9s");




function App() {
  
  const [{}, dispatch] = useStateValue();

  

  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch ({
          type: 'SET_USER',
          user: null
        })

      }
    })
}, [])

  return  (

 <Router>
   < div className="app">
        
    
    <Switch>
      <Route path="/orders">
        <Header />
        <Orders />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

       <Route path="/checkout">
          <Header />
          <Checkout />
       </Route>

       <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
       </Route>

       <Route path="/">
          <Header />
          <Home />
          
       </Route>

    </Switch>

    <footer>
      <h4>Made by Archimedes Alvarenga</h4>
      All Rights Reserved to Amazon
    </footer>

 
   </div>
  </Router>
 );
}

export default App;
