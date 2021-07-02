import React from 'react';
import Tilt from 'react-tilt';

import reactLogo from '../../media/Logos/react.png';
import nodeLogo from '../../media/Logos/node.png';
import threeLogo from '../../media/Logos/threejs.png';
import unityLogo from '../../media/Logos/unity.png';
import pythonLogo from '../../media/Logos/python.png';
import postgreLogo from '../../media/Logos/postgresql.png';

import './Home.scss';

// -------------------------------------------------------------------------------------------

const showLogo = (logo, name) => {
    return (
        <div className="ph4">
                <Tilt className="Tilt shadow-2 logo" options={{ max: 0 }} >
                    <img alt="logo" src={logo} className="shadow-2 br-pill" />
                    <h4 className="skillName ma2">{name}</h4>
                </Tilt>
        </div>
    )
}

// About Section
const About = () => {
    return (
        <div className='about'>
            <div className='aboutme'>
                <h1>
                    About me 
                </h1>
                <p> 
                    Since I was a child I've been a huge fan of technology and video games,
                    now I'm a Web Developer and I love creating video games as a hobby too!
                    <br/>
                    <br/>
                    But there is no end point to keep learning and improving, and that's what 
                    I do best.
                </p>
                <a href="/">
                    <button>
                        Read more
                    </button>
                </a>
                
            </div>
            <div className='skills'>
                <h1>
                    Check out my skills!
                </h1>
                
                <div className="flex justify-center pa3 pb4">
                    {showLogo(reactLogo, 'React')}
                    {showLogo(nodeLogo, 'Node')}                    
                    {showLogo(threeLogo, 'Three.js')}                    
                </div>
                <div className="flex justify-center pa3 pb4">                    
                    {showLogo(unityLogo, 'Unity')} 
                    {showLogo(postgreLogo, 'SQL')}
                    {showLogo(pythonLogo, 'Python')}
                </div>
            </div>
        </div>
    )
}

const Portfolio = () => {
    return (
        <div className='portfo'>
            <div className='portfo-box'>
                <div className='pa2'>
                    <h1 className=''>
                        PROJECTS
                    </h1>
                    <div className='projects'>
                        
                    </div>
                    {/* LOS LINKS SERAN DIRECTAMENTE DE LA IMAGEN DE VIDEOGAMES Y WEB DEV */}
                    {/* <button>
                        Read more
                    </button> */}
                </div>
            </div>
        </div>
    )
}

// THIS IS WHAT WE RETURN
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
            {About()}
            {Portfolio()}
        </>
    )
}

export default Home;

