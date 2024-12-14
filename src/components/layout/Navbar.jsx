import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-brand">CipherTools</div>
        <div className="navbar-links">
          <a href="#" className="nav-link">Documentation</a>
          <a href="#" className="nav-link">GitHub</a>
        </div>
      </div>
    </nav>
  );
}