import React from 'react';
import Tilt from 'react-tilt';
import { Link as RouteLink } from 'react-router-dom';

// LOGOS
import reactLogo from '../../media/Skills/react.png';
import nodeLogo from '../../media/Skills/node.png';
import threeLogo from '../../media/Skills/threejs.png';
import unityLogo from '../../media/Skills/unity.png';
import pythonLogo from '../../media/Skills/python.png';
import postgreLogo from '../../media/Skills/postgresql.png';

import profile from '../../media/Gallery/Pixel1-5.gif';

import './About.scss';

// -------------------------------------------------------------------------------------------

const Skills = () => {

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

    return (
        <div className='skills'>
            <h1> Check out my skills! </h1>
            <div className="grid-parent">
                {showLogo(reactLogo, 'React')}
                {showLogo(nodeLogo, 'Node')}
                {showLogo(threeLogo, 'Three.js')}
                {showLogo(unityLogo, 'Unity')}
                {showLogo(postgreLogo, 'SQL')}
                {showLogo(pythonLogo, 'Python')}
            </div>
        </div>
    )
}


const About = () => {
    

    return (
        <>
            <div className='about'>
                <div className='about-box'>
                    <div id='profile'>
                        <img src={profile} alt='profile' />
                    </div>
                    <div className='aboutme'>
                        <h1> This is me! </h1>
                        <p> 
                            Since I was a child I've been a huge fan of technology and video games,
                            I wanted to now how it all worked underneath the hood, I was very curious.
                            When I entered university I discovered programming but had no idea how many
                            things could be created from it, so I just one day Googled 'How to make 
                            video games' and the magic was borned.
                            <br/><br/>
                            My adventure as a developer began creating video games for almost half a year, 
                            however as I learned more and more, I realized how vast the development world
                            was and without realizing it, discovering and learning new things every day 
                            became my new passion.
                            <br/><br/>
                            Now I am a Web Developer, still an Electrical Engineering student (8th/10th)
                            and in my spare time I create videogames as a hobby. However, every day I continue
                            to improve my skills even more and learn new things that make me grow day by day 
                            as a greater developer.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='my-skills'>
                {Skills()}
            </div>
        </>
    )
}

export default About;