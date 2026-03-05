import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {  } from "./Myprofileside.css";

const Myprofileside = () => {
  const navigate = useNavigate();

  const logOutUseAccount = async () => {
    try {
      localStorage.removeItem("user_role");
      const response = await fetch(
        "http://localhost:5200/user/logout",
        { credentials: "include" }
      );

      if (!response.ok) throw new Error("Logout failed");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteUserAccount = async () => {
    try {
      let response = await fetch(
        "http://localhost:5200/user/delete",
        { credentials: "include" }
      );
      if (!response.ok) throw new Error("Delete failed");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <aside className="profile-sidebar">

      {/* USER */}
      <div className="greeting">
        <i className="fa-solid fa-user"></i>
        <div>
          <h2>Hello</h2>
          <span>Welcome back</span>
        </div>
      </div>

      {/* MENU */}
      <nav className="profile-menu">

        <Link to="/cart" className="menu-item">
          <i className="fa-solid fa-box"></i>
          <span>My Orders</span>
        </Link>

        <div className="menu-group">
          <h3>Account Settings</h3>

          <Link to="/userdetail" className="menu-sub">
            Profile Information
          </Link>

          <Link to="/address" className="menu-sub">
            Manage Address
          </Link>
        </div>

        <Link to="/wishlist" className="menu-item">
          <i className="fa-solid fa-heart"></i>
          <span>My Wishlist</span>
        </Link>

      </nav>

      {/* ACTIONS */}
      <div className="profile-actions">
        <button className="btn logout" onClick={logOutUseAccount}>
          Log Out
        </button>

        <button className="btn delete" onClick={DeleteUserAccount}>
          Delete Account
        </button>

        <Link to="/admin/">
          <button className="btn admin">Admin Panel</button>
        </Link>
      </div>

    </aside>
  );
};

export default Myprofileside;
