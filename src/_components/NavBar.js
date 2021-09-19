import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>Stats</li>
                    <li>Roster</li>
                    <li>Recruiting</li>
                    <li>Blog</li>
                </ul>
            </nav>            
        </div>
    )
}

export default NavBar;
