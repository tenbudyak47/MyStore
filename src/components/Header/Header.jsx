"use client";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="container header">
        {/* Logo */}
        <div className="logo">MyStore</div>
        {/* Menu */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/product">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        {/* <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header> */}
        {/* Actions */}
        <div className="actions">
          <input
            type="text"
            className="search-box"
            placeholder="Search products..."
          />
          <button className="action-button" aria-label="Account">
            👤
          </button>
          <button className="action-button" aria-label="Cart">
            🛒
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
