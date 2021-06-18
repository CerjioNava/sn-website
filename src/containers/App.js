import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';                        // Para el título y evitar usar hooks para un titulo
import Navigation from '../components/Navigation/Navigation';
import Introduction from '../components/Introduction/Introduction';
import './App.css';

function App() {
  
  // useEffect(() => {
  //   document.title = 'SN DEVELOPMENT';
  // }, [])

  return (    
    <div className="tc">      
      <Helmet>
        <title>Sergio Nava | Desarrollador</title>
      </Helmet>

      <Navigation />
      <Introduction />
    </div>
  );
}

export default App;
