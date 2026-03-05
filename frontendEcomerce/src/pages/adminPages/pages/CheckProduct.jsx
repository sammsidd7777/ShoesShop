import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../adminStyle/CheckProduct.css";

const CheckProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5200/products/all");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch products");
      }

      setProducts(data.products || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5200/products/delete/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Delete failed");
      }

      alert("Product deleted successfully");
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="check-product-wrapper">
      <h1 className="page-title">All Products</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item._id} className="product-card">
            <Link to={`/productDetail/${item._id}`}>
              <img
                src={
                  item.productImg?.length
                    ? `http://localhost:5200/images/${item.productImg[0]}`
                    : "/no-image.png"
                }
                alt={item.productName}
              />
            </Link>

            <h2>{item.productName}</h2>

            <div className="price-actions">
              <p>₹{item.productPrice}</p>

              <i
                className="fa-regular fa-trash-can delete-icon"
                onClick={() => handleDeleteProduct(item._id)}
                title="Delete product"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckProduct;
