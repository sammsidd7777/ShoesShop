import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductFilterSection.css";

const ProductFilterSection = ({
  bestSellers,
  bigDiscount,
  newArrivals,
  handleAddToWish,
  handleAddToCart,
}) => {
  const [activeFilter, setActiveFilter] = useState("best");

  const products =
    activeFilter === "best"
      ? bestSellers
      : activeFilter === "discount"
      ? bigDiscount
      : newArrivals;

  return (
    <>
      <div className="filter-buttons">
        <button
          className={activeFilter === "best" ? "active" : ""}
          onClick={() => setActiveFilter("best")}
        >
          Big Deals
        </button>

        <button
          className={activeFilter === "discount" ? "active" : ""}
          onClick={() => setActiveFilter("discount")}
        >
          Big Discount
        </button>

        <button
          className={activeFilter === "new" ? "active" : ""}
          onClick={() => setActiveFilter("new")}
        >
          New Arrivals
        </button>
      </div>

      <div className="section-box">
        <div className="box-deal">
          {products.slice(0, 4).map((item) => (
            <div key={item._id} className="card-section">
              <Link to={`/productDetail/${item._id}`}>
                <img
                  src={`http://localhost:5200/images/${item.productImg[0]}`}
                  alt={item.productName}
                />
              </Link>

              <h2>{item.productName}</h2>

              <div className="price-icon">
                <i
                  className="fa-regular fa-heart"
                  onClick={() => handleAddToWish(item._id)}
                ></i>

                <p>₹{item.productPrice}</p>

                <i
                  className="fa-solid fa-cart-arrow-down"
                  onClick={() => handleAddToCart(item._id)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFilterSection;
