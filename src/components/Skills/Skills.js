import React from 'react';
import Tilt from 'react-tilt';
import reactLogo from './Logos/react.png';
import pythonLogo from './Logos/python.png';
import unityLogo from './Logos/unity.png';
import nodeLogo from './Logos/node.png';
import './Skills.css';

const showLogo = (logo, name) => {
    return (
        <div className="mh4">
                <Tilt className="Tilt br-pill shadow-2 bg-black logo" options={{ max: 40 }} >
                    <img alt="logo" src={logo} className="shadow-2 br-pill" />
                </Tilt>
                <h2>{name}</h2>
        </div>
    )
}

const Skills = () => {

    return (
        <div>        
            <h1 className="f2 tc">
                Main Skills
            </h1>

            <div className="flex justify-center pa3">
                {showLogo(reactLogo, 'React')}
                {showLogo(nodeLogo, 'Node')}
                {showLogo(unityLogo, 'Unity')}
                {showLogo(pythonLogo, 'Python')}                
            </div>

        </div>
    )

}

export default Skills;