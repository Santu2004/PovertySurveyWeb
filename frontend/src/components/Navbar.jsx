import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Poverty Survey
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/survey">Survey</Link>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <Link to="/admin-login" className="admin-btn">
            Admin Login
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;