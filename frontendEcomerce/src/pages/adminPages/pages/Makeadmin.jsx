import React, { useEffect, useState } from "react";
import "../adminStyle/Makeadmin.css";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

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

  // Open popup
  const openPopup = (user) => {
    setSelectedUser(user);
    setShowPopup(true);
  };

  // Close popup
  const closePopup = () => {
    setSelectedUser(null);
    setShowPopup(false);
  };

  // Make admin
  const handleMakeAdmin = async () => {
    if (!selectedUser) return;

    try {
      const response = await fetch(
        `http://localhost:5200/user/makeadmin/${selectedUser._id}`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to make admin");
      }

      alert("User promoted to admin ✅");
      closePopup();
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="make-admin-page">
      <h1 className="page-title">Make Admin</h1>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Confirm Action</h2>
            <p>
              Make <b>{selectedUser?.email}</b> an admin?
            </p>

            <div className="popup-actions">
              <button className="confirm" onClick={handleMakeAdmin}>
                Confirm
              </button>
              <button className="cancel" onClick={closePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Grid */}
      <div className="user-grid">
        {users
          .filter((u) => u.userRole === "user" || !u.userRole)
          .map((user) => (
            <div key={user._id} className="user-card">
              <img src="/user-avatar.png" alt="user" />

              <h3>{user.email}</h3>
              <span className="role">{user.userRole || "user"}</span>

              <div className="info">
                <p>{user.name}</p>
                <p>{user.phone}</p>
              </div>

              <button
                className="make-admin-btn"
                onClick={() => openPopup(user)}
              >
                Make Admin
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MakeAdmin;
