import React from 'react';
import Tilt from 'react-tilt';

import reactLogo from '../../media/Skills/react.png';
import nodeLogo from '../../media/Skills/node.png';
import threeLogo from '../../media/Skills/threejs.png';
import unityLogo from '../../media/Skills/unity.png';
import pythonLogo from '../../media/Skills/python.png';
import postgreLogo from '../../media/Skills/postgresql.png';

import portfo1 from '../../media/Gallery/VG1.PNG';
import portfo2 from '../../media/Gallery/Pixel1.gif';
import portfo3 from '../../media/Gallery/Pixel3.gif';

import './Home.scss';

// -------------------------------------------------------------------------------------------

const showLogo = (logo, name) => {
    return (
        <div className="grid-child">
            <Tilt className="Tilt shadow-2 logo" options={{ max: 0 }} >
                <img alt="logo" src={logo} className="shadow-2 br-pill" />
                <h4 className="skillName">{name}</h4>
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
                <div className="grid-parent">
                    {showLogo(reactLogo, 'React')}
                    {showLogo(nodeLogo, 'Node')}
                    {showLogo(threeLogo, 'Three.js')}                
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
                <div className='portfo-content'>
                    <h1 >
                        Projects
                    </h1>
                    <div className='projects'>
                        <div className='project-section'>
                            <img src={portfo2} alt='Videogames' />
                            <div className='description'>
                                VIDEOGAMES
                            </div>
                        </div>
                        <div className='project-section'>
                            <img src={portfo3} alt='Web' />
                            <div className='description'>
                                WEB DEVELOPMENT
                                <br/><br/>
                                Coming soon...
                            </div>
                        </div>
                    </div>
                    <div className='mt2'>
                        <a href="/">
                            <button>
                                Read more
                            </button>
                        </a>
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
            <div className="intro">
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
                            <h4>My Portfolio</h4>
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

