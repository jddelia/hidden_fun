import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div id="nav-left">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
            <div id="nav-right">
                <input type="text" placeholder="Search..." id="search"></input>
            </div>
        </nav>
    );
}

export default Navbar;