import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">New Arrival</span>

          <h1 className="hero-title">
            50% Off Your <br />
            First Shopping
          </h1>

          <p className="hero-subtitle">
            Discover premium shoes curated just for you
          </p>

          <Link to="/shop" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
