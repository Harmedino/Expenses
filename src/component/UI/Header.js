import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/home" className="logo">Expense</Link> 
      <nav className="nav">
        <ul>
          <li><Link to="/">Login</Link></li> 
          <li><Link to="/register">Signup</Link></li> 
          <li><button className="logout-btn">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
