import React from 'react';
import Tilt from 'react-tilt';

import reactLogo from '../../media/Logos/react.png';
import pythonLogo from '../../media/Logos/python.png';
import unityLogo from '../../media/Logos/unity.png';
import nodeLogo from '../../media/Logos/node.png';

import './Home.css';

const showLogo = (logo, name) => {
    return (
        <div className="mh4">
                <Tilt className="Tilt br-pill shadow-2 bg-black logo" options={{ max: 30 }} >
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

const Home = () => {

    return (
        <>   
            <div style={{ display: "flex" }} className="pa4 tc">                        
                <div className="intro center f5">
                    <h1>Hello there! I'm <br/>
                        <span>Sergio Nava</span>
                    </h1>
                    <p className="f3">
                        Take a look, be my guest!
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </p>
                </div>               
            </div>
            {Skills()}
        </>
    )
}

export default Home;

