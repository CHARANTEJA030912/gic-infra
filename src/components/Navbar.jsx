import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Link to external CSS

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <div className="brand">Gajulapalli Infra</div>

        {/* Desktop Nav */}
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={handleMenuToggle}>
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="hamburger-icon">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-item" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-item" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className="mobile-item" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" className="mobile-item" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="mobile-item" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
