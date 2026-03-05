import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { handleAddToCart, handleAddToWish } from "./helperCart";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [detail, setDetail] = useState(null);
  const [product, setProduct] = useState([]);
  const [mainImg, setMainImg] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5200/products/detail/${id}`
        );
        const data = await res.json();

        const d = data.message.datas.product_detail;

        setDetail(d);
        setProduct(data.message.datas.product);
        setMainImg(`http://localhost:5200/images/${d.productImg[0]}`);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  if (!detail) return null;

  return (
    <div className="product-detail-page">
      <h1 className="product-brand">{detail.productBrand}</h1>

      {/* CENTERED CARD */}
      <div className="product-detail-center">
        <div className="product-detail-container">
          {/* IMAGE */}
          <div className="product-image">
            <div className="product-image-option">
              {detail.productImg.map((img, i) => (
                <img
                  key={i}
                  src={`http://localhost:5200/images/${img}`}
                  onClick={() =>
                    setMainImg(`http://localhost:5200/images/${img}`)
                  }
                  alt=""
                />
              ))}
            </div>

            <div className="product-main-img">
              <img src={mainImg} alt={detail.productName} />
            </div>
          </div>

          {/* INFO */}
          <div className="product-detail-info">
            <h2>{detail.productName}</h2>

            <p className="price">₹{detail.productPrice}</p>

            <div className="rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
              <span>4.8</span>
            </div>

            <p className="description">{detail.productDescription}</p>

            <div className="action-btns">
              <button onClick={() => handleAddToCart(detail._id)}>
                Add to Cart
              </button>

              <i
                className="fa-regular fa-heart"
                onClick={() => handleAddToWish(detail._id)}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* SIMILAR */}
      <div className="similar-section">
        <h1>Similar Products</h1>

        <div className="box-deal">
          {product.map((item) => (
            <div key={item._id} className="card-section">
              <Link to={`/productDetail/${item._id}`}>
                <img
                  src={`http://localhost:5200/images/${item.productImg[0]}`}
                  alt=""
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
    </div>
  );
};

export default ProductDetail;
