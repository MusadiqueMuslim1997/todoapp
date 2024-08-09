import React, { useState } from 'react';

import './Style.css'; // Ensure you have a CSS file for styling

const NavBar = () => {
 

  return (
   <>
   <header>
  <div className="logo">Resturant</div>
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
