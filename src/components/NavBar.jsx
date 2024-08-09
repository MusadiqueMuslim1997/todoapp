import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSpoon, faUtensils, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'

import './Style.css'; // Ensure you have a CSS file for styling

const NavBar = () => {
 

  return (
   <>
   <header>
  <div className="logo"><FontAwesomeIcon icon={faSpoon} /> Resturant</div>
<div className="list">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li className='items'>Menu</li>

  </ul>
</div>
   </header>
   
   </>
  );
};

export default NavBar;
