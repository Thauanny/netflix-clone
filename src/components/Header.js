import React from 'react';
import './Header.css'

const Header = ({black}) => {

    return(
        <header className={black ? 'black ': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png" alt="Logo"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user"></img>
                </a>
            </div>
        </header>
    );
}


export default Header;