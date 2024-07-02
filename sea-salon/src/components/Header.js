import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.png';

const Header = () => {
    return (
    <header className="header">
        <div className="header-left">
          <Link to="/">
            <img src={logo} alt="SEA Salon Logo" className="logo" style={{ width: '80px', height: 'auto' }} />
          </Link>
        </div>
        <div className="header-right">
          <Link to="/signup" className="header-link">Sign Up</Link>
          <Link to="/login" className="header-link">Login</Link>
        </div>
      </header>
    );
  };

export default Header;