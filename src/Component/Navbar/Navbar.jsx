import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navbar">
        <div className="logo">Apple</div>
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="menu-item">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
