import React, { useEffect, useState } from "react";
import AdminPlane from "./AdminPlane";
import "../adminStyle/RemoveAdmin.css";

const RemoveAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch users
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5200/user/all", {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      setUsers(data.users || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Open modal
  const openConfirm = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Close modal
  const closeConfirm = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  // Remove admin
  const handleRemoveAdmin = async () => {
    if (!selectedUser) return;

    try {
      const response = await fetch(
        `http://localhost:5200/user/removeadmin/${selectedUser._id}`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to remove admin");
      }

      alert("Admin role removed successfully ✅");
      closeConfirm();
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="remove-admin-layout">
      <AdminPlane />

      {/* Confirm Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Remove Admin</h2>
            <p>
              Are you sure you want to remove admin role from
              <b> {selectedUser?.email}</b>?
            </p>

            <div className="modal-actions">
              <button className="confirm" onClick={handleRemoveAdmin}>
                Confirm
              </button>
              <button className="cancel" onClick={closeConfirm}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Grid */}
      <div className="admin-grid">
        {users
          .filter((u) => u.userRole === "admin")
          .map((user) => (
            <div key={user._id} className="admin-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="admin"
              />

              <span className="role-badge">Admin</span>

              <h3>{user.email}</h3>

              <div className="info">
                <p>{user.name}</p>
                <p>{user.phone}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => openConfirm(user)}
              >
                Remove Admin
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RemoveAdmin;
