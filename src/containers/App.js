import React, { useState } from 'react';
import { Helmet } from 'react-helmet';          // Para el título y evitar usar hooks para un titulo
import { animateScroll } from 'react-scroll';

// STATIC
import Navigation from '../components/Navigation/Navigation';
import CanvasAll from '../components/CanvasAll/CanvasAll';
import Contact from '../components/Contact/Contact';

// HOME
import Home from '../components/Home/Home';

// STYLE
import arrowUp from '../media/arrowup.png';
import './App.scss';

// -------------------------------------------------------------------------------------------

const ButtonScroll = () => {

  const scrollTop = () => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuad'
    })
  }

  return (
    <div className='b-scroll'>
      <div onClick={scrollTop}>
        <img alt='scroll' src={arrowUp} />
      </div>
    </div>
  )
}

function App() {

  const [route, setRoute] = useState('home');

  const Page = () => {
    console.log(route);
    if (route === 'home')
      return (<Home />)
    // else if (route === 'about')
    //   return (<About />)
    // else
    //   return (<Portfolio />)
  }
  
  return (      
    <div className='main'>
      <Helmet><title>Sergio Nava | Desarrollador</title></Helmet>
      <Navigation />
      <ButtonScroll />
      {Page()}
      {/* <Home />       */}
      <Contact />
      <CanvasAll />
    </div>     
  );
}

export default App;
