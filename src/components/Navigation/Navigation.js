import React from 'react';
import './Navigation.css';
import linkedinLogo from '../../media/Logos/linkedin.png';
import instagramLogo from '../../media/Logos/instagram.png';
// import twitterLogo from '../../media/Logos/twitter2.png';
import githubLogo from '../../media/Logos/github2.png';

// -------------------------------------------------------------------------------------------

const logoNav = () => {
    return (
        <div className='flex items-center'>
            <a href={"https://github.com/CerjioNava"} >
                <img alt="logo" src={githubLogo} className='icon' />
            </a>
            <a href={"https://www.instagram.com/cerjionava/"} >
                <img alt="logo" src={instagramLogo} className='icon' />
            </a>                    
            <a href={"https://www.linkedin.com/in/sergio-j-nava-g/"} >
                <img alt="logo" src={linkedinLogo} className='icon' />
            </a>                    
        </div>       
    )
}

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

                {logoNav()}
            </div>            
        </nav>
    )

}

export default Navigation;