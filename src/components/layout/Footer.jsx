import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <p className="footer-copyright">
            © {new Date().getFullYear()} CipherTools
          </p>
          <p className="footer-security">
            All operations performed client-side
          </p>
        </div>
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">
            Privacy
          </Link>
          <Link to="/security" className="footer-link">
            Security
          </Link>
          <Link to="/docs" className="footer-link">
            Documentation
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
