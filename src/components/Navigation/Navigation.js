import React from 'react';
import './Navigation.css';
import linkedinLogo from '../../media/Logos/linkedin.png';
import instagramLogo from '../../media/Logos/instagram.png';
// import twitterLogo from '../../media/Logos/twitter2.png';
import githubLogo from '../../media/Logos/github2.png';


const Navigation = () => {

    return (
        <nav className="flex justify-between pa4 f4" >            
            <div className='flex items-center ml4 mb1'>
                <p className=" b f3">
                    <a href="/" className="alink">SERGIO.</a>
                </p>
            </div>

            <div className="flex mr2 f4">
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

                <div className='flex items-center mb2'>                    
                    <img alt="logo" src={instagramLogo} className='pa2 icon' />
                    <img alt="logo" src={githubLogo} className='pa2 icon' />                    
                    <img alt="logo" src={linkedinLogo} className='pa2 icon' />
                    {/* <img alt="logo" src={twitterLogo} className='pa2 icon' /> */}
                </div>
            </div>            
        </nav>
    )

}

export default Navigation;