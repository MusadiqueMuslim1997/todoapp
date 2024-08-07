import React, { useState } from 'react';

import './Style.css'; // Ensure you have a CSS file for styling

const NavBar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <div className="logo">Resturant</div>
      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={handleToggle}
        style={{ display: 'none' }} // Hide the checkbox itself
      />
      <label
        htmlFor="check"
        className="exit"
        onClick={() => setIsChecked(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </label>
      <label
        htmlFor="check"
        className="check"
        onClick={() => setIsChecked(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </label>

      <div className=  {`ul ${isChecked ? 'show' : ''}`} id="ul">
        <ul>
          <li>Home</li>
          <li>Project</li>
          <li> Contact Us </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
