import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'> 
    <Header/>
    <Nav/>
   <div className='app-wrapper-content'>
       <Route exact path='/dialogs' component={Dialogs}/>
       <Route path='/profile' component={Profile}/>
   </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

