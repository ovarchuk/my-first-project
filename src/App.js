import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import Profile from './components/Profile/Profile.js';




function App() {
  return (
    <div className='app-wrapper'> 
    <Header/>
    <Nav/>
    <Profile/>
    </div>
  );
}

export default App;

