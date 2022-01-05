import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="main-nav">
      <a href="/">Bruno Yamamoto</a>
      <ul className="ul-config">
          <li><a className="remove-nav-window" href="#products">Projects</a></li>
          <li><a className="remove-nav-window" href="#about">About</a></li>
          <li><a className="remove-nav-window" href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
