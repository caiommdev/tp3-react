import React from 'react';
import './Header.css'

function Header(){
    return(
        <header className="header">
            <div className="container">
            <h1 className="header-title">My Application</h1>
            <nav className="header-nav">
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header