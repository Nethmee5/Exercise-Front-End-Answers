import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">AEON</div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="/">Showcasse</a>
        <a href="/">Docs</a>
        <a href="/">Blogs</a>
        <a href="/">Analytics</a>
        <a href="/">Enterprise</a>
        <a href="/">Commerce</a>
        <a href="/">Template</a>
        <a href="/">Enterprise</a>
        <a href="/">Showcasse</a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search documentation..." />
      </div>
      <div className="icon-container">
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </nav>
  );
};
export default Navbar;
