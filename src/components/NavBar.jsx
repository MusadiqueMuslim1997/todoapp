import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSpoon, faUtensils, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'

import './Style.css'; // Ensure you have a CSS file for styling
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const NavBar = () => {
 

  return (
   <>
   <header>
  <div className="logo"><FontAwesomeIcon icon={faSpoon} /> Resturant</div>
<a href="https://github.com/MusadiqueMuslim1997" target='blank'><div className="list">
  <FontAwesomeIcon icon={faGithub}/>
</div>
</a>
   </header>
   
   </>
  );
};

export default NavBar;
