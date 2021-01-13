import React from 'react';
import "./NavBar.scss";
import logo from '../../logo.png';


export default function NavBar() {
    return (
      <nav className="navbar">
        <img src={logo} alt="City tours logo." />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              Tours
            </a>
          </li>
        </ul>
      </nav>
    );
}
