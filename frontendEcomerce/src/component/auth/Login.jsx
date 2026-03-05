import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  async function loginhandler(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch(
        "http://localhost:5200/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login success:", data);

      // ✅ redirect after login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    }
  }

  return (
    <div className="login-page">
      {/* LEFT IMAGE */}
      <div className="login-image">
        <img
          src="https://narawear.com/assets/LoginImage-lh_t_JZT.jpg"
          alt="login"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="login-details">
        <h2>Welcome to</h2>
        <h1>Malkhani Store</h1>

        <p className="login-text">
          Today is a new day. It's your day. You shape it. You style it.
          Be the best version of yourself.
        </p>

        <form className="login-form" onSubmit={loginhandler}>
          <label>Email</label>
          <input type="email" name="email" required />

          <label>Password</label>
          <input type="password" name="password" required />

          <p className="forgot">Forgot password?</p>

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          Don’t have an account?
          <Link to="/signup"> Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
