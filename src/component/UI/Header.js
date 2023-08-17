import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/home" className="logo">Logo</Link> {/* Use Link component */}
      <nav className="nav">
        <ul>
          <li><Link to="/">Login</Link></li> {/* Use Link component */}
          <li><Link to="/register">Signup</Link></li> {/* Use Link component */}
          <li><button className="logout-btn">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
