import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './logo.png'; // Place your logo image in the same folder

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50); // Adjust scroll threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className={`logo-container ${isSticky ? 'sticky-logo' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className={`logo-text ${isSticky ? 'small' : ''}`}>My Logo</h1>
      </div>
      <nav className={`navbar ${isSticky ? 'sticky-nav' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
