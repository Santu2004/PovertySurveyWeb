import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

function AdminLogin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/admin/login", admin);

      if (res.data.success) {
        alert("Login Successful");

        // Save login status
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("username", admin.username);

        navigate("/dashboard");
      } else {
        alert(res.data.message || "Invalid Username or Password");
      }
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to server.");
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h1>Admin Login</h1>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Username</label>

              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={admin.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={admin.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminLogin;