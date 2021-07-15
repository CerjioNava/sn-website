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

import profile from '../../media/Gallery/Profile.png';

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
                            I wanted to now how it all worked underneath the hood so I just one day Googled
                            'How to make video games' and the magic was borned.
                            <br/><br/>
                            {/* Mi aventura como desarrollador inició creando videojuegos por casi medio año,
                            pero el mundo del desarrollo es demasiado basto y aprender más se convirtió en 
                            mi nueva pasión. Cada aprendizaje me orientaba a uno nuevo, aprendí Python y 
                            conocí el Machine Learning, descubrí las bases de datos y finalmente el Desarrollo
                            Web. */}
                            My adventure as a developer started creating videogames for almost half a year, 
                            but the development world is too vast and learning more became my new passion. 
                            Each new tool oriented me to a new one, I learned Python and I got to know Machine
                            Learning, I discovered databases and finally Web Development.
                            <br/><br/>
                            {/* Ahora soy un Desarrollador Full Stack y en mis tiempos libres me dedico a crear
                            videojuegos. Sin embargo, cada día sigo mejorando aún más mis habilidades y 
                            aprendiendo nuevas cosas que me hagan crecer día a día como desarrollador. */}
                            Now I am a Full Stack Developer and in my spare time I create videogames. However,
                            every day I continue to improve my skills even more and learn new things that make
                            me grow day by day as a developer.

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