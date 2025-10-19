import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#">About</a>
        <a href="#">Services</a>
      </div>

      <div className="nav-center">CARD</div>

      <div className="nav-right">
        <a href="#">Customer</a>
        <a href="#">Article</a>
      </div>
    </nav>
  );
}
