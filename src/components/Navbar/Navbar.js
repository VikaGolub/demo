import React from 'react';
import c from './navbar.module.css';
import {NavLink} from 'react-router-dom';
import Followers from "./Followers/followers";

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <ul>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/messages'>Messages</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
                <li><NavLink to='news'>News</NavLink></li>

                <li><a href='#'>Music</a></li>
                <li><a href='#'>Settings</a></li>
            </ul>
            <Followers/>
        </nav>
    )
};

export default Navbar;
