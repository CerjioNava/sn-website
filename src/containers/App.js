import React from 'react';
// import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';          // Para el título y evitar usar hooks para un titulo

import Navigation from '../components/Navigation/Navigation';
import CanvasAll from '../components/CanvasAll/CanvasAll';
// HOME
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
// import Introduction from '../components/Introduction/Introduction';
// import Skills from '../components/Skills/Skills';
// STYLE
import './App.css';



// const Home = () => {
//   return (   
//     <div className="tc">      
//       <Introduction />
//       <Skills />
//     </div>   
//   )
// }


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
