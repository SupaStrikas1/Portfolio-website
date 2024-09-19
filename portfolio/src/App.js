import './App.css';
import React from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
