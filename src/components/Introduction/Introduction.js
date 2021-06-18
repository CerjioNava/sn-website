import React from 'react';
import Tilt from 'react-tilt';
import './Introduction.css';
import profile from './profile.png';

const Introduction = () => {

    return (
        
        <div style={{ display: "flex" }} className="justify-center">
            
            <Tilt className="Tilt shadow-2 br-pill" options={{ max: 40 }} style={{ height: 300, width: 300 }} >
                <img alt="logo" src={profile} className="br-pill shadow-2" />
            </Tilt>
            <div>
                <p>
                    HOLA
                </p>
            </div>

        </div>

    )

}

export default Introduction;