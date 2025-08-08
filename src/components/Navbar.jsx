import logo from '../assets/logo.png';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleScrollNav = (sectionId) => {
    closeMenu();
    if (location.pathname !== "/") {
      // Go to home first, then scroll after render
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // Already on home → just scroll
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleScrollNav("home")}>
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a onClick={() => handleScrollNav("home")} className="nav-btn">Home</a>
        <a onClick={() => handleScrollNav("skills")} className="nav-btn">Skills</a>
        <a onClick={() => handleScrollNav("experience")} className="nav-btn">Experience</a>
        <a onClick={() => handleScrollNav("recommendation")} className="nav-btn">Recommendations</a>
        <a onClick={() => handleScrollNav("contact")} className="nav-btn">Contact</a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
