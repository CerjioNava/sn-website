import React from 'react';
import Tilt from 'react-tilt';
import { useInView } from 'react-intersection-observer';

import reactLogo from '../../media/Logos/react.png';
import pythonLogo from '../../media/Logos/python.png';
import unityLogo from '../../media/Logos/unity.png';
import nodeLogo from '../../media/Logos/node.png';

import Contact from '../Contact/Contact';
import './Home.css';

// -------------------------------------------------------------------------------------------

const showLogo = (logo, name) => {
    return (
        <div className="ph4">
                <Tilt className="Tilt br-pill shadow-2 bg-black logo" options={{ max: 30 }} >
                    <img alt="logo" src={logo} className="shadow-2 br-pill" />
                </Tilt>
                <h2>{name}</h2>
        </div>
    )
}

const Skills = () => {
    return (
        <div className='skills '>
            <div>
                <h1 className="f2 o-90">
                    Main Skills
                </h1>
                
                <div className="flex justify-center pa3">
                    {showLogo(reactLogo, 'React')}
                    {showLogo(nodeLogo, 'Node')}
                    {showLogo(unityLogo, 'Unity')}
                    {showLogo(pythonLogo, 'Python')}                
                </div>
            </div>
        </div>
    )
}

const Home = () => {

    return (
        <>  
            <div className="intro f5">
                <div>
                    <h1>
                        Hello there! I'm <br/>
                        <span>Sergio Nava</span>
                    </h1>
                    <p className="f3 pb1">
                        Take a look, be my guest!
                    </p>
                    <a href="/">
                        <button>
                            My Portfolio
                        </button>
                    </a>
                </div>
            </div>
            {Skills()}            
        </>
    )
}

export default Home;

