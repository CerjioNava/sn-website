import React, { useEffect } from 'react';    
import { animateScroll } from 'react-scroll';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

// STATIC/
import Navigation from '../components/Navigation/Navigation';
import CanvasAll from '../components/CanvasAll/CanvasAll';
import Contact from '../components/Contact/Contact';

// PAGES
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';

// STYLE
import arrowUp from '../media/Nav/arrowup.png';
import loader from '../media/Gallery/Pixel4.gif';       // Kirby
import './App.scss';

// --------------------------------------------------------------------------------------------

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

const OnRouteChange = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const PreLoader = () => {
    return (
        <>
            <div id='loader' >
                <img src={loader} alt='loader' />
                <h1>Loading</h1>
            </div>
        </>
    )
}

// const OnLoadChange = () => {
    
//     const FadeOut = () => {
//         let body = document.getElementById('loader');
//         let opacity = body.style.opacity;
//         console.log(opacity)

//         const idInterval = setInterval(() => {
//             if (body.style.opacity > 0) 
//                 body.style.opacity -= 0.01;
//             else {
//                 // body.style.display = 'none';
//                 clearInterval(idInterval);
//             }
//         }, 2000);
//     }

//     window.onload = FadeOut;
// }

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 2000);
    })
    return (      
        <>
            {PreLoader()}
            <BrowserRouter className='main'>
                <Navigation />
                <ButtonScroll />
                <OnRouteChange />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/portfolio' component={Portfolio} />
                </Switch>
                <Contact />
                <CanvasAll />
            </BrowserRouter>
            {/* {OnLoadChange()} */}
        </>
    );
}
        
export default App;
        