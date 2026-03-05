import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  } from "./header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch(
          "http://localhost:5200/user/current",
          {
            credentials: "include",
          }
        );
        setIsLoggedIn(response.ok);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <>
      <header className="header-wrapper">
        <div className="glass-nav">
          {/* LOGO */}
          <Link to="/" className="logo">
            Malkhani<span className="gold">Shoes</span>
          </Link>

          {/* NAV LINKS */}
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </nav>

          {/* ACTIONS */}
          <div className="header-actions">
            {/* Auth */}
            {isLoggedIn ? (
              <Link to="/profile" aria-label="Profile">
                <i className="fa-solid fa-user"></i>
              </Link>
            ) : (
              <Link to="/login" aria-label="Login">
                <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" aria-label="Cart" className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-dot" />
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="header-before"></div>
    </>
  );
};

export default Header;
