import React, { useState } from 'react';
import { Helmet } from 'react-helmet';          
import { animateScroll } from 'react-scroll';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// STATIC
import Navigation from '../components/Navigation/Navigation';
import CanvasAll from '../components/CanvasAll/CanvasAll';
import Contact from '../components/Contact/Contact';

// PAGES
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';

// STYLE
import arrowUp from '../media/Nav/arrowup.png';
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
    return (      
        <BrowserRouter className='main'>
            <Helmet><title>Sergio Nava | Desarrollador Web</title></Helmet>
            <Navigation />
            <ButtonScroll />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
            </Switch>
            <Contact />
            <CanvasAll />
        </BrowserRouter>     
    );
}
        
export default App;
        