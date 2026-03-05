import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShopPage.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filters
  const [price, setPrice] = useState("all");
  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5200/products/all");
      const data = await response.json();
      const productData = data.message.fontdata.product;
      setProducts(productData);
      setFilteredProducts(productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // FILTER LOGIC
  useEffect(() => {
    let temp = [...products];

    // Price filter
    if (price !== "all") {
      temp = temp.filter((p) => p.productPrice <= Number(price));
    }

    // Color filter
    if (color !== "all") {
      temp = temp.filter((p) => p.color === color);
    }

    // Size filter
    if (size !== "all") {
      temp = temp.filter((p) => p.size?.includes(size));
    }

    setFilteredProducts(temp);
  }, [price, color, size, products]);

  async function handleAddToCart(productId) {
    try {
      await fetch(`http://localhost:5200/cart/add/${productId}`, {
        credentials: "include",
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Collection</h1>

      {/* FILTER BAR */}
      <div className="shop-filters">
        <select onChange={(e) => setPrice(e.target.value)}>
          <option value="all">Price</option>
          <option value="2000">Under ₹2000</option>
          <option value="5000">Under ₹5000</option>
          <option value="10000">Under ₹10000</option>
        </select>

        <select onChange={(e) => setColor(e.target.value)}>
          <option value="all">Color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
        </select>

        <select onChange={(e) => setSize(e.target.value)}>
          <option value="all">Size</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>

        <button
          className="clear-filter"
          onClick={() => {
            setPrice("all");
            setColor("all");
            setSize("all");
            setFilteredProducts(products);
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div className="shop-grid">
        {filteredProducts.map((item) => (
          <div key={item._id} className="shop-card">
            <Link to={`/productDetail/${item._id}`}>
              <img
                src={`http://localhost:5200/images/${item.productImg[0]}`}
                alt={item.productName}
              />
            </Link>

            <div className="shop-card-body">
              <h3>{item.productName}</h3>

              <div className="shop-card-footer">
                <span className="shop-price">₹{item.productPrice}</span>
                <div className="shop-actions">
                  <i className="fa-regular fa-heart"></i>
                  <i
                    className="fa-solid fa-cart-plus"
                    onClick={() => handleAddToCart(item._id)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
