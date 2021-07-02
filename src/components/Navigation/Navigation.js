import React from 'react';
import { Link } from 'react-scroll';

import linkedinLogo from '../../media/Logos/linkedin.png';
import instagramLogo from '../../media/Logos/instagram.png';
import githubLogo from '../../media/Logos/github.png';

import './Navigation.css';

// -------------------------------------------------------------------------------------------

const logoNav = () => {
    return (
        <div className='flex items-center'>
            <a href={"https://github.com/CerjioNava"} >
                <img alt="logo" src={githubLogo} className='icon' />
            </a>
            <a href={"https://www.linkedin.com/in/sergio-j-nava-g/"} >
                <img alt="logo" src={linkedinLogo} className='icon' />
            </a>
            <a href={"https://www.instagram.com/cerjionava/"} >
                <img alt="logo" src={instagramLogo} className='icon' />
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
                    <Link 
                        to="contact" 
                        smooth='easeInOutQuad' 
                        duration={1750} 
                        className="alink"
                    >
                        Contact
                    </Link>
                </p>

                {logoNav()}
            </div>            
        </nav>
    )

}

export default Navigation;