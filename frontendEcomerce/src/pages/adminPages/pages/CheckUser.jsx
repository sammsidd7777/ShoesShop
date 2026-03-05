import React, { useEffect, useState } from "react";
import "../adminStyle/CheckUser.css";

const CheckUser = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5200/user/all", {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      setUsers(data.users);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="check-user-wrapper">
      <h1 className="page-title">All Users</h1>

      <div className="user-grid">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <img
              src="/user-avatar.png"
              alt="user"
              className="user-avatar"
            />

            <h3>{user.email}</h3>
            <span className="role">{user.userRole}</span>

            <div className="user-info">
              <p>{user.name}</p>
              <p>{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckUser;
