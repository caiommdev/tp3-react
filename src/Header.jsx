import React from 'react';
import Menu from './Menu';
import './Header.css'

function Header(){
    return(
        <header className="header">
            <div className="container">
            <h1 className="header-title">My Application</h1>
            <Menu/>
            </div>
        </header>
    );
}

export default Header