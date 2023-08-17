import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Logo</a>
      <nav className="nav">
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
          <li><button className="logout-btn">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
