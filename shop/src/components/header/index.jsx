import React from 'react'
import './header.css'
import Mode from '../modeBtn'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'> 
        <i class="fa-brands fa-shopify"></i>
       <p>opping</p>
        </div>
        <div className='choose'>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>BLOG</li>
            </ul>
        </div>
        <Mode/>
        <div className='phone'>
        <i class="fa-solid fa-phone"></i>
        <p>099 898 2004</p>
        </div>
    </div>
  )
}

export default Header