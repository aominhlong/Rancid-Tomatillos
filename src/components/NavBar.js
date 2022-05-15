import React from 'react';
import '../styles/NavBar.css'

const NavBar = ({ goHome, handleChange }) => {
    return(
        <nav className="main-navbar" aria-label="Main">
            <div className="container flex" aria-description="Navigation container with site name and navigation options">
                <h1 className="site-title">Rotten Tamatillos</h1>
                <nav>
                    <ul>
                        <li aria-setsize="3" aria-posinset="1"><button className="main-link" id="navHomeBtn">Home</button></li>
                        <li aria-setsize="3" aria-posinset="2"><button className="main-link" id="navDashboardBtn">Dashboard</button></li>
                        <li aria-setsize="3" aria-posinset="3"><button className="main-link" id="navBookBtn">Book</button></li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default NavBar;






// const NavBar = ({goHome, handleChange}) => {
//     return(
//         <div className='nav-bar-container'>
//             <div className='title-img'>
//                 <h1>Rancid Tamatillos</h1>
//             </div>
//             <form className='button-input-container'>
//                 <button className='home' onClick={() => goHome()}>Home</button>
//                 <div className='dropdown'>
//                     <button className='categories'>Categories</button>
//                     <div className='dropdown-content'>
//                         <a href='#'>Action</a>
//                         <a href='#'>Adventure</a>
//                         <a href='#'>Horror</a>
//                         <a href='#'>Comedy</a>
//                     </div>
//                 </div>
//                 <input type='text' placeholder='Search' onChange={event => handleChange(event)}></input>
//             </form>
//         </div>
//     )
// }
