import React from 'react';
// import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';          // Para el título y evitar usar hooks para un titulo

// STATIC
import Navigation from '../components/Navigation/Navigation';
import CanvasAll from '../components/CanvasAll/CanvasAll';
import Contact from '../components/Contact/Contact';

// HOME
import Home from '../components/Home/Home';

// STYLE
import './App.css';


function App() {

  return (      
    <div >
      <Helmet><title>Sergio Nava | Desarrollador</title></Helmet>
      <Navigation />            
      <Home />
      <Contact />
      <CanvasAll />
    </div>     
  );
}

export default App;
