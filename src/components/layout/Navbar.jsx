import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          QuickCipherTools
        </Link>
        <div className="navbar-links">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <a
            href="https://github.com/your-repo"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
