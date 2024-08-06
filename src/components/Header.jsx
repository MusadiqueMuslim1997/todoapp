import React from 'react'
import './Style.css'

const Header = () => {
  return (
   <header>
    <div className="logo">Resturant</div>
    <div className="menu">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>

        </ul>
    </div>
   </header>
  )
}

export default Header
