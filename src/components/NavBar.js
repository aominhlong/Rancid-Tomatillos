import React from 'react';
import '../styles/NavBar.css'

const NavBar = ({ goHome, handleChange }) => {
    return(
        <nav aria-description='Navigation container with site name and navigation options'>
            <ul className='nav-selection'>
                <li className='site-title' aria-setsize='4' aria-posinset='1'>
                    <h1>RANCID TOMATILLOS</h1>
                </li>
                <li aria-setsize='4' aria-posinset='2'>
                    <button className='nav-btn home-btn' onClick={() => goHome()}>HOME</button>
                </li>
                <li aria-setsize='4' aria-posinset='3'>
                    <div className='dropdown'>
                        <button className='nav-btn categories-btn'>GENRE</button>
                        <div className='dropdown-content'>
                            <a className='action' href='#'>ACTION</a>
                            <a href='#'>ADVENTURE</a>
                            <a href='#'>HORROR</a>
                            <a href='#'>COMEDY</a>
                        </div>
                    </div>
                </li>
                <li aria-setsize='4' aria-posinset='4'>
                    <form>
                        <input type='text' placeholder='Search' onChange={event => handleChange(event)}></input>
                    </form>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;