import React from "react";
import { NavLink } from "react-router-dom";
import "../adminStyle/AdminPanel.css";

const AdminPanel = () => {
  return (
    <aside className="admin-panel">
      <div className="admin-section">
        <h1>Product Section</h1>

        <NavLink to="/admin/add/product">Add Product</NavLink>
        <NavLink to="/admin/admin-product">Check & Delete Product</NavLink>
        <NavLink to="/admin/update-product">Update Product</NavLink>
      </div>

      <div className="admin-section">
        <h1>User Management</h1>

        <NavLink to="/admin/checkuser">Check User</NavLink>
        <NavLink to="/admin/removeuser">Remove User</NavLink>
        <NavLink to="/admin/makeadmin">Appoint Admin</NavLink>
        <NavLink to="/admin/removeadmin">Remove Admin</NavLink>
      </div>

      <div className="admin-actions">
        <button className="logout-btn">Logout</button>
        <button className="delete-btn">Delete</button>
      </div>
    </aside>
  );
};

export default AdminPanel;
