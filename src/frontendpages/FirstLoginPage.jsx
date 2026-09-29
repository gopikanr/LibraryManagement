import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="login-page">

      {/* Decorative background circles */}
      <div className="login-circle circle-one"></div>
      <div className="login-circle circle-two"></div>
      <div className="login-circle circle-three"></div>

      <div className="login-container">

        {/* Left Side */}
        <div className="login-intro">

          <div className="library-icon">
            📚
          </div>

          <h1>Library Management</h1>

          <p>
            Manage your library, books and users
            in one simple and beautiful place.
          </p>

          <div className="intro-features">
            <div>
              <span>✓</span>
              Easy Book Management
            </div>

            <div>
              <span>✓</span>
              User Management
            </div>

            <div>
              <span>✓</span>
              Quick Issue & Return
            </div>
          </div>

        </div>

        {/* Login Card */}
        <div className="login-card">

          <div className="login-heading">
            <h2>Welcome Back 👋</h2>
            <p>Login to continue to your account</p>
          </div>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Username</label>

              <div className="input-wrapper">
                <span>👤</span>

                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="input-wrapper">
                <span>🔒</span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Login As</label>

              <div className="input-wrapper">
                <span>🎓</span>

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <button className="login-button" type="submit">
              Login
              <span>→</span>
            </button>

          </form>

          <p className="login-footer">
            Library Management System
          </p>

        </div>

      </div>
    </div>
  );
}

export default FirstLoginPage;