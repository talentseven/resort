import React from 'react';
import Logo from './images/logo.svg';
import './App.css';


import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Single from './pages/SingleRoom'
import Error from './pages/Error'

import {Route, Switch, Router} from 'react-router-dom' 
import SingleRoom from './pages/SingleRoom';
import Navbar from './Components/Navbar'



function App() {

  return (
    <>
     <Navbar/>
     <Switch>
      <Route exact path = '/' component = {Home}/> 
      <Route exact path = '/rooms/' component = {Rooms}/> 
      <Route exact path = '/rooms/:slug' component = {SingleRoom}/> 
      <Route component = {Error} /> 
       
    </Switch> 


    </>
  );
}

export default App;
