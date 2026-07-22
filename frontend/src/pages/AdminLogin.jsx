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
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("username", admin.username);

        alert("Login Successful");
        navigate("/dashboard");
      }
    } catch (error) {
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
                value={admin.username}
                placeholder="Enter Username"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                value={admin.password}
                placeholder="Enter Password"
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