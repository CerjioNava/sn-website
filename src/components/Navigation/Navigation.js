import React from 'react';
import './Navigation.css';

// bb bw2 b--light-blue

const Navigation = () => {

    return (
        <nav className="flex justify-between pa4 f4" >            
            <div>
                <p className="ma4 b f3">
                    <a href="/" className="alink">SERGIO NAVA</a>
                </p>
            </div>

            <div className="flex mr2">
                <p className="ma4 ml2">
                    <a href="/" className="alink">Home</a>
                </p>
                <p className="ma4 ml2">
                    <a href="/" className="alink">About</a>
                </p>
                <p className="ma4 ml2">
                    <a href="/" className="alink">Portfolio</a>    
                </p>
                <p className="ma4 ml2">
                    <a href="/" className="alink">Contact</a>
                </p>
                <p className="ma4 ml2">
                   (links)
                </p>
            </div>            
        </nav>
    )

}

export default Navigation;