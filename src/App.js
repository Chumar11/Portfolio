import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Projects from './components/Projects';
import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';

function App() {
 
  return (
    <div className="App">
<Nav/>
<Hero/>
<Skill/>
<Projects/>
<Contact/>
    </div>
  );
}

export default App;
