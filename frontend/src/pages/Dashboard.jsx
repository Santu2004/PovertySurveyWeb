import "./Dashboard.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalSurveys: 0,
    totalFamilyMembers: 0,
    averageIncome: 0,
    belowPovertyLine: 0,
    ownHouse: 0,
    noElectricity: 0,
    noToilet: 0,
    noInsurance: 0,
    internetUsers: 0,
    smartphoneUsers: 0,
  });

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin-login");
      return;
    }

    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setStats(res.data.data);
    } catch (err) {
      console.error("Dashboard Error:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("username");

    alert("Logged out successfully!");

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="card-container">
          <div className="card">
            <h2>Total Surveys</h2>
            <p>{stats.totalSurveys}</p>
          </div>

          <div className="card">
            <h2>Total Family Members</h2>
            <p>{stats.totalFamilyMembers}</p>
          </div>

          <div className="card">
            <h2>Average Income</h2>
            <p>₹ {Number(stats.averageIncome || 0).toFixed(0)}</p>
          </div>

          <div className="card">
            <h2>Below Poverty Line</h2>
            <p>{stats.belowPovertyLine}</p>
          </div>

          <div className="card">
            <h2>Own Houses</h2>
            <p>{stats.ownHouse}</p>
          </div>

          <div className="card">
            <h2>No Electricity</h2>
            <p>{stats.noElectricity}</p>
          </div>

          <div className="card">
            <h2>No Toilet</h2>
            <p>{stats.noToilet}</p>
          </div>

          <div className="card">
            <h2>No Health Insurance</h2>
            <p>{stats.noInsurance}</p>
          </div>

          <div className="card">
            <h2>Internet Users</h2>
            <p>{stats.internetUsers}</p>
          </div>

          <div className="card">
            <h2>Smartphone Users</h2>
            <p>{stats.smartphoneUsers}</p>
          </div>
        </div>

        <div className="dashboard-buttons">
          <Link to="/responses">
            <button>View Survey Responses</button>
          </Link>

          <Link to="/reports">
            <button>View Reports</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;