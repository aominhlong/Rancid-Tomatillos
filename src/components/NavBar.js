import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = ({ goHome, handleChange, searchBarValue }) => {
    return(
        <nav aria-description='Navigation container with site name and navigation options'>
            <ul className='nav-selection'>
                <li className='site-title' aria-setsize='4' aria-posinset='1'>
                    <h1 className='glow'>RA
                        <span className='flicker-slow'>N</span>C
                        <span className='flicker-fast'>I</span>D TO
                        <span className='flicker-slow'>M</span>ATI
                        <span className='flicker-fast'>L</span>LOS
                    </h1>
                </li>
                <li aria-setsize='4' aria-posinset='2'>
                <NavLink to='/'>
                    <button className='nav-btn home-btn' onClick={ () => goHome() }>HOME</button>
                </NavLink>
                </li>
                <li aria-setsize='4' aria-posinset='4'>
                    <form>
                        <input name='search' type='text' placeholder='Search' value={ searchBarValue } onChange={ event => handleChange(event) }></input>
                    </form>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;