//Responsive Navigation menu with a Hamburger Icon
import React, { useState } from 'react';
import './styles/Seventeen.css';

export default function Seventeen() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className='menu-icon' onClick={toggleMenu}>
      ☰
      </button>
      <ul className={`menu ${isOpen? 'open' : ''}`}>
        <li>Home</li>
        <li>Services</li>
        <li>Contacts</li>
        <li>About</li>
      </ul>
    </div>
  )
}
