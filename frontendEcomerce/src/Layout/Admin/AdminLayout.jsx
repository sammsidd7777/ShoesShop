import React from "react";
import { Outlet } from "react-router-dom";
import AdminPanel from "../../pages/adminPages/pages/AdminPlane";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <AdminPanel />
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
