import React from 'react';
import { Link ,NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div class="topnav">
            <NavLink to="/">Movie Db App</NavLink>
                <div class="topnav-right">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
