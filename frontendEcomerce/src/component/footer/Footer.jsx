import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-section">
          <h2 className="footer-logo">Samm<span>Store</span></h2>
          <p>
            Premium footwear crafted for comfort and style. Step into
            confidence with Samm-Store.
          </p>
        </div>

        {/* ABOUT */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>G-58, Kalka Ji Post</p>
          <p>New Delhi - 110076</p>
          <p>Email: uilib.help@gmail.com</p>
          <p>Phone: +91 9958 234 365</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Samm-Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
