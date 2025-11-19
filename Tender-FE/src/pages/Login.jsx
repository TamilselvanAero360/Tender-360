import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import config from "../constants/config"; // <-- using your config file

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const validate = () => {
    let temp = {};

    if (!email) {
      temp.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      temp.email = "Enter a valid email";
    }

    if (!password) {
      temp.password = "Password is required";
    } else if (password.length < 6) {
      temp.password = "Password must be at least 6 characters";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validate()) return;

    try {
      const response = await fetch(`${config.apiBaseURL}/api/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setApiError(data.detail || "Invalid email or password");
        return;
      }

      // Save Knox token
      localStorage.setItem("token", data.token);

      // You can also store user type for permission (viewer / editor)
      localStorage.setItem("role", data.user.role);

      navigate("/allbid");
    } catch (error) {
      setApiError("Server error. Try again later.");
    }
  };

  return (
    <div className="login-page">
      <h1 className="title">Tender 360</h1>

      <div className="login-container">
        <h2 className="login-heading">Login</h2>

        {apiError && <p className="error">{apiError}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="forgot-row">
            <Link to="/forgot-password" className="forgot-link">
              Forget password?
            </Link>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
