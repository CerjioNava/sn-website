import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';                        // Para el título y evitar usar hooks para un titulo

import Navigation from '../components/Navigation/Navigation';
import Introduction from '../components/Introduction/Introduction';
import Skills from '../components/Skills/Skills';
import CanvasAll from '../components/CanvasAll/CanvasAll.js'
import './App.css';

function App() {

  return (      
    <div>
      <Helmet><title>Sergio Nava | Desarrollador</title></Helmet>
      <Navigation />
      
      <CanvasAll />

      {/* <div className="tc">      
        <Helmet>
          <title>Sergio Nava | Desarrollador</title>
        </Helmet>
        <Introduction />
        <Skills />
      </div>           */}

    </div>     
  );
}

export default App;
