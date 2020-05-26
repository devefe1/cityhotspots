import React from 'react';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Contact from './components/Contact';
import Restaurant from './assets/restaurant.jpeg';
// import Line from './assets/Line.png';
import Mall from './assets/Mall.jpg';
import Map from './assets/westin-map-1024x611.png';

function App() {
  return (
    <div className="app">
       <Logo />
          <div>
          <Header />
          </div>
          <div className = "restImg">
            <img className = "restaurantImg" src={Restaurant}  alt="fireSpot"/>
         </div> 
         <div className = "about">
            <li className= "aboutHead">ABOUT</li>
           
            {/* <img className = "lineImg" src={Line}  alt="fireSpot"/> */}
            <li> <br/>We help you find the best places to shop,
              <br/>
              eat & drink while you travel across the world.
            </li>
          </div>
              <div className="mImg">
              <img className = "mallImg" src={Mall}  alt="fireSpot"/>
              </div>
                  <Contact/>
               <div className="mpImg">
                    <img className="mapImg" src={Map} alt="fireSpot"/>
                  </div>
                 
              
    </div>
      
  );
}

export default App;
