import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 

// IMAGES
import profile from '../../media/Gallery/profile.png';      // Profile
import portfo1 from '../../media/Gallery/Pixel1-5.gif';     // Kevin
import portfo2 from '../../media/Gallery/Pixel4.gif';       // Kirby
import portfo3 from '../../media/Gallery/Pixel3.gif';       // Cacodemon
import arrow from '../../media/Nav/arrow6.png';

import './Home.scss';

// -------------------------------------------------------------------------------------------

// About Section
const About = () => {
    
    return (
        <div id='about'>
            <div className='aboutme'>
                <h1> About me </h1>
                <p> 
                    Since I was a child I've been a huge fan of technology and video games,
                    now I'm a Web Developer and I love creating video games as a hobby too!
                    <br/>
                    <br/>
                    But there is no end point to keep learning and improving, and that's what 
                    I do best.
                </p>
                <RouteLink to="/about">
                    <button> Read more </button>
                </RouteLink>
            </div>

            <div className='about-profile'>
                <img src={profile} alt='profile' />
            </div>
        </div>
    )
}

// Portfolio Section
const Portfolio = () => {

    const [portfo, setPortfo] = useState(0);

    const ChangePortfo = (num) => {
        if ((portfo < 2 && num===1) || (portfo > 0 && num===-1)) 
            setPortfo(portfo+num);
    }

    const ContentSection = (portfoimg, title, content) => {
        return (
            <div className='projects'>
                <div className='project-view'>
                    <img src={portfoimg} alt='Videogames' />
                </div>
                <div className='content'> 
                    <h1> {title} </h1>
                    <p>
                        <br/>
                        {content}
                    </p>
                </div>
            </div>
        )
    }

    const Content = () => {
        if (portfo === 0) {
            return ContentSection(
                portfo1, 
                'Check out some of my latest work!',
                'There are also video games, have fun!' 
                )
        } else if (portfo === 1) {
            return ContentSection(
                portfo2, 
                'You can play my video games!',
                "Don't be so serious, come and laugh a little! There will always be time for entertainment."
                )
        } else 
            return ContentSection(
                portfo3,
                'More projects',
                'Coming soon...'
                )
    }

    return (
        <div className='portfo'>
            <div className='portfo-box'>
                <div className='arrow' style={{'transform': 'scaleX(-1)'}} >
                    <img src={arrow} alt='Previous' onClick={() => ChangePortfo(-1)} />
                </div>
                <div className='portfo-content'>
                    {Content()}
                    <RouteLink to="/portfolio">
                        <button> My Portfolio </button>
                    </RouteLink>
                </div>
                <div className='arrow' >
                    <img src={arrow} alt='Previous' onClick={() => ChangePortfo(1)} />
                </div>
            </div>
        </div>
    )
}

// THIS IS WHAT WE RETURN
const Home = () => {

    return (
        <>  
            <Helmet><title>Sergio Nava | Home</title></Helmet>
            <div className="intro">
                <div>
                    <h1>
                        Hello there! I'm <br/>
                        <span>Sergio Nava</span>
                    </h1>
                    <p className="f3 pb1">
                        Take a look, be my guest!
                    </p>
                    <RouteLink to="/portfolio">
                        <button>
                            <h4>My Portfolio</h4>
                        </button>
                    </RouteLink>
                </div>
            </div>
            {About()}
            {Portfolio()}
        </>
    )
}

export default Home;

