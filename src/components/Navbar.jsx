import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h4>Blog</h4>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h4>Menu</h4>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
