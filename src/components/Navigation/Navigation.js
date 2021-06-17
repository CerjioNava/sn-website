import React from 'react';
import './Navigation.css';

const Navigation = () => {

    return (
        <nav className="flex justify-between bb bw2 b--light-blue" >            
            <div>
                <p class="f3 pa1 link bg-animate hover-bg-lightest-blue pointer b ml4">
                    <a class="alink">SERGIO NAVA</a>
                </p>
            </div>

            <div class="flex">
                <p className="f3 pa1 link bg-animate hover-bg-lightest-blue pointer mr4">
                    <a href="https://www.google.com/" class="alink">Home</a>
                </p>
                <p className="f3 pa1 link bg-animate hover-bg-lightest-blue pointer mr4">
                    <a href="" class="alink">About</a>
                </p>
                <p className="f3 pa1 link bg-animate hover-bg-lightest-blue pointer mr4">
                    <a href="" class="alink">Portfolio</a>    
                </p>
                <p className="f3 pa1 link bg-animate hover-bg-lightest-blue pointer mr4">
                    <a href="" class="alink">Contact</a>
                </p>
            </div>            
        </nav>
    )

}

export default Navigation;