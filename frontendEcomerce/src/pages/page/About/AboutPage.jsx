import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Step Into Confidence</h1>
          <p>
            Malkhani Shoes blends craftsmanship, comfort, and contemporary style
            to redefine everyday footwear.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="about-section">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>Malkhani Shoes</strong>, we believe footwear is more than
            just fashion — it’s an experience. Our journey began with a vision
            to create shoes that balance durability, comfort, and bold design.
          </p>
          <p>
            Each pair is thoughtfully engineered using premium materials,
            ensuring all-day comfort while keeping your style effortless.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Malkhani Shoes Craftsmanship"
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower every step you take with footwear that reflects confidence,
          performance, and modern elegance.
        </p>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>Why Malkhani Shoes?</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Superior Quality</h3>
            <p>
              Crafted using premium materials for unmatched durability and
              comfort.
            </p>
          </div>

          <div className="value-card">
            <h3>Contemporary Design</h3>
            <p>
              Clean silhouettes and modern aesthetics built for today’s
              lifestyle.
            </p>
          </div>

          <div className="value-card">
            <h3>Reliable Delivery</h3>
            <p>
              Fast, secure, and hassle-free shipping across India.
            </p>
          </div>

          <div className="value-card">
            <h3>Customer First</h3>
            <p>
              Dedicated support to ensure your satisfaction at every step.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
