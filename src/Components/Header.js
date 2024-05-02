import React from "react";

export default function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center">
        {" "}
        {/* Centering the entire content */}
        <div className="logo" style={{ flex: "none" }}>
          {" "}
          {/* Keep the logo on the left */}
          <a href="index.html">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>
        </div>
        <nav id="navbar" className="navbar d-flex justify-content-center">
          {" "}
          {/* Centering the navigation */}
          <ul
            className="nav-links"
            style={{ fontWeight: "bold", fontSize: "10em" }}
          >
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
