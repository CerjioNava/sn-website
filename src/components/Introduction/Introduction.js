import React from 'react';
import Tilt from 'react-tilt';
import './Introduction.css';
import profile from './profile.png';

const Introduction = () => {

    return (
        
        <div style={{ display: "flex" }} className="mh5 mv5">
            
            <div className="fl w-50 justify-center flex">
                <Tilt className="Tilt shadow-2 br-pill image" options={{ max: 0 }} >
                    <img alt="logo" src={profile} className="br-pill shadow-2 image" />
                </Tilt>
            </div>
            
            <div className="w-50 intro">
                <h1>Hello there! I'm <br/>
                    <span>Sergio Nava</span>
                </h1>
                <p>
                    <br/>
                    I'm a Web Developer and self-taught Videogame Developer <br/>
                    AQUI VA LA INTRODUCCIÓN TURURURURURURURURURURU <br/>
                    AQUI VA LA INTRODUCCIÓN TURURURURURURURURURURU <br/>
                    AQUI VA LA INTRODUCCIÓN TURURURURURURURURURURU <br/>
                    AQUI VA LA INTRODUCCIÓN TURURURURURURURURURURU <br/>
                    AQUI VA LA INTRODUCCIÓN TURURURURURURURURURURU <br/>
                    AQUI VA LA INTRODUCCIÓN TURURURURURURURURURURU <br/>
                    AQUI VA LA INTRODUCCIÓN TURURURURURURURURURURU <br/>
                    
                </p>
            </div>

        </div>
        
        

    )

}

export default Introduction;
