import React, { useState } from "react";

const NavBar = () => {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src="https://gist.github.com/sllozier/b9d6597945d50f21c9d37d5ee4853a0c/raw/844988c92df9973f42cab1c244928c7b05c38a2d/DW_logo.png"
              alt="Logo"
            />
          </a>
          <span className="navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end has-text-light">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/blog">
              Blog
            </a>
            <a className="navbar-item" href="/give">
              Give
            </a>
            <a className="navbar-item" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
