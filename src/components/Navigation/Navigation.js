import React, { useState } from 'react';
import { Link } from 'react-scroll';

import linkedinLogo from '../../media/Logos/linkedin.png';
import instagramLogo from '../../media/Logos/instagram.png';
import githubLogo from '../../media/Logos/github.png';
import menuLogo from '../../media/Logos/menu.png'

import './Navigation.scss';

// -------------------------------------------------------------------------------------------

const logoNav = () => {
    return (
        <div className='logoNav'>
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

    
    const [menu, setMenu] = useState(true);    

    const showMenu = () => {
        setMenu(!menu);

        if (!menu)
            document.getElementById('header-menu').style.display='none';
        else  
            document.getElementById('header-menu').style.display='flex';
    }

    return (
        <nav className="header" >            
            <div className='flex items-center ml4 mb1 justify-between'>
                <p className="b f3">
                    <a href="/" className="alink">SERGIO.</a>
                </p>
                <div className='menu' onClick={showMenu}>
                    <img alt='menu' src={menuLogo}/>
                </div>
            </div>

            <div className='flex justify-end'>
                <div id="header-menu">
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
                            onClick={showMenu}
                        >
                            Contact
                        </Link>
                    </p>
                
                    {logoNav()}
                </div>            
            </div>
        </nav>
    )

}

export default Navigation;