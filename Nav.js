import React from 'react';
import { Link } from 'react-router-dom'

//Link allows you to navigate to those pages by clicking on them 
// to prop is for the path

function Nav(props) {

    const navStyle = {
        color: 'white'
    }


    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to='/about'>
                    <li style={navStyle}>About</li>
                </Link>
                <Link to='/shop'>
                    <li style={navStyle}>Shop</li>
                </Link>
                <Link to='/'>
                    <li style={navStyle}>Home</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;