import React from 'react';
import '../styles/NavBar.css'

const NavBar = ({goHome}) => {
    return(
        <div>
            <h1>Rancid Tamatillos</h1>
            <button onClick={() => goHome()}>Home</button>
        </div>
    )
}

export default NavBar;