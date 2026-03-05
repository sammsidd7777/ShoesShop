import React from "react";
import "./Wishpage.css";

const Wishpage = () => {
  return (
    <>

      <div className="wish-page">
        <h1 className="wish-title">Your Wishlist ❤️</h1>

        {/* Empty State */}
        <div className="wish-empty">
          <i className="fa-regular fa-heart"></i>
          <p>Your wishlist is empty</p>
          <span>Add products you love to see them here</span>
        </div>

        {/* 
        Future: map wishlist products here
        */}
      </div>

    </>
  );
};

export default Wishpage;
