import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <p className="footer-copyright">© {new Date().getFullYear()} CipherTools</p>
          <p className="footer-security">All operations performed client-side</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Security</a>
          <a href="#" className="footer-link">Terms</a>
        </div>
      </div>
    </footer>
  );
}