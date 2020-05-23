import React from 'react';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Restaurant from './assets/restaurant.jpeg';

function App() {
  return (
    <div className="app">
       <Logo />
          <div>
          <Header />
          </div>
          <img className = "restaurantImg" src={Restaurant}  alt="fireSpot"/>
          <div className = "about">
            <ul>ABOUT</ul>
            <p>We help you find the best places to shop,
              eat & drink while you travel across the world.
            </p>
          </div>
    </div>
      
  );
}

export default App;
