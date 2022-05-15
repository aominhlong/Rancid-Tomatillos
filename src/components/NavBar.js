import React from 'react';
import '../styles/NavBar.css'

const NavBar = ({goHome, handleChange}) => {
    return(
        <div className='nav-bar-container'>
            <div className='title-img'>
                <img src="https://images.vexels.com/media/users/3/132481/isolated/preview/9fedd03df8eb7e962d492dac4a7cc081-icono-de-c--rculo-de-tomate-by-vexels.png" alt='tomatillos icon image'></img>
                <h1>Rancid Tamatillos</h1>
            </div>
            <form className='button-input-container'>
                <button className='home' onClick={() => goHome()}>Home</button>
                <div className='dropdown'>
                    <button className='categories'>Categories</button>
                    <div className='dropdown-content'>
                        <a href='#'>Action</a>
                        <a href='#'>Adventure</a>
                        <a href='#'>Horror</a>
                        <a href='#'>Comedy</a>
                    </div>
                </div>
                <input type='text' placeholder='Search' onChange={event => handleChange(event)}></input>
            </form>
        </div>
    )
}

export default NavBar;