import { useState } from "react";
import "../assets/styles/reset.css";
import "../assets/styles/header.css";
import "../assets/styles/grid.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <nav className="header-nav">
        <a href="#" className="logo">
          Material Tailwind
        </a>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa-solid fa-inbox"></i>Pages
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa-solid fa-user"></i>Account
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa-solid fa-folder-open"></i>Docs
            </a>
          </li>
        </ul>
        <div className="auth-action d-md-none">
          <button className="sign-in-btn">Sign in</button>
          <a className="block-btn" href="#">
            Blocks
          </a>
        </div>
        <button className="nav-menu-hidden-btn d-none d-md-block" onClick={toggleMenu}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>
      <div className={`nav-menu-hidden ${menuOpen ? "d-md-block" : "d-none"}`}>
        <ul className="nav-list-hidden">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa-solid fa-inbox"></i>Pages
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa-solid fa-user"></i>Account
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa-solid fa-folder-open"></i>Docs
            </a>
          </li>
        </ul>
        <div className="auth-action">
          <button className="sign-in-btn">Sign in</button>
          <a className="block-btn" href="#">
            Blocks
          </a>
        </div>
      </div>
    </div>
  );
};
