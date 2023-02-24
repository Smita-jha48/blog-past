import React from 'react';
import './header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="titleUpper">The Artifact</div>
        <div className="titleLower">Culture & Art blog</div>
      </div>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
