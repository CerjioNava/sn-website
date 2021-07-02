import React from 'react';

import linkedinLogo from '../../media/Logos/linkedin.png';
import instagramLogo from '../../media/Logos/instagram.png';
import githubLogo from '../../media/Logos/github.png';
// import twitterLogo from '../../media/Logos/twitter.png';
import gmailLogo from '../../media/Logos/gmail.png';
import whatsappLogo from '../../media/Logos/whatsapp.png';

import './Contact.scss';

// -------------------------------------------------------------------------------------------

const Contact = () => {

    return (
        <div id="contact">
            <div className='mh5'>
                <h1>CONTACT ME</h1>
                <p> Let's build the website of your dreams! </p> 
                <a href={"tel:+584129431812"} >
                    <img alt="logo" src={whatsappLogo} className='icons' />
                </a>
                <a href={"mailto:sergionava.dev@gmail.com"} >
                    <img alt="logo" src={gmailLogo} className='icons' />
                </a>
            </div>

            <div className='mh5'>
                <h1>SOCIAL MEDIA</h1>
                <p> Feel free to stop by and say hello! </p>
                <a href={"https://github.com/CerjioNava"} >
                    <img alt="logo" src={githubLogo} className='icons' />
                </a>
                <a href={"https://www.linkedin.com/in/sergio-j-nava-g/"} >
                    <img alt="logo" src={linkedinLogo} className='icons' />
                </a>
                <a href={"https://www.instagram.com/cerjionava/"} >
                    <img alt="logo" src={instagramLogo} className='icons' />
                </a>
            </div>
        </div>
    )
}

export default Contact;