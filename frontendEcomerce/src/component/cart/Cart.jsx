import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import { useRazorpay } from "react-razorpay";
import "./Cart.css";

const Cart = () => {
  const { Razorpay } = useRazorpay();
  const [product, setProduct] = useState([]);
  const [totalproduct, setTotalProduct] = useState(0);
  const [totalPice, setTotalPice] = useState(0);

  const cartItem = async () => {
    try {
      const res = await fetch("http://localhost:5200/cart/all", {
        credentials: "include",
      });
      const data = await res.json();
      setProduct(data.message.Cartdata);
      setTotalProduct(data.message.totalprodcut);
      setTotalPice(data.message.totalPrice);
    } catch (err) {
      console.log(err);
    }
  };

  const handalDeleteCartItem = async (item) => {
    await fetch(
      `http://localhost:5200/cart/Deletecartitem/${item.productId}`,
      { credentials: "include" }
    );
    cartItem();
  };

  const handleUpdateNumber = async (id, num) => {
    if (num < 1) return;
    await fetch(
      `http://localhost:5200/cart/updateQuntity/${id}/${num}`,
      { credentials: "include" }
    );
    cartItem();
  };

  const handlebuyKnow = async (id, num) => {
    const res = await fetch(
      `http://localhost:5200/payment/CreateOrder/${id}/${num}`,
      { credentials: "include" }
    );
    const order = (await res.json()).message;

    const rzpay = new Razorpay({
      key: import.meta.env.VITE_RAZ_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Samm Mart",
      order_id: order.id,
      handler: async (response) => {
        await fetch("http://localhost:5200/payment/VerifiyPayment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        alert("Payment Successful 🎉");
      },
    });

    rzpay.open();
  };

  useEffect(() => {
    cartItem();
  }, []);

  return (
    <>

      <div className="cart-page">
        <h1 className="cart-title">Your Shopping Cart</h1>

        {product.length === 0 ? (
          <p className="empty-cart">Your cart is empty 🛒</p>
        ) : (
          <div className="cart-wrapper">
            {/* CART ITEMS */}
            <div className="cart-items">
              {product.map((item) => (
                <div className="cart-card" key={item._id}>
                  <img
                    src={`http://localhost:5200/images/${item.productImg[0]}`}
                    alt=""
                  />

                  <div className="cart-info">
                    <h3>{item.productTitle}</h3>
                    <p className="price">₹{item.productPrice}</p>

                    <div className="qty-control">
                      <button onClick={() => handleUpdateNumber(item._id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleUpdateNumber(item._id, item.quantity + 1)}>+</button>
                    </div>
                  </div>

                  <div className="cart-actions">
                    <i className="fa-solid fa-trash" onClick={() => handalDeleteCartItem(item)}></i>
                    <i
                      className="fa-solid fa-credit-card"
                      onClick={() => handlebuyKnow(item.productId, item.quantity)}
                    ></i>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>
                <span>{totalproduct}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span>₹{totalPice}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default Cart;
