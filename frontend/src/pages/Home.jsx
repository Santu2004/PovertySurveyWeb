import "./Home.css";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import homeImage from "../assets/home.png";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">

        

        <section className="hero">

          <div className="hero-text">

            <h1>Poverty Survey Management System</h1>

            <p>
              Welcome to the Online Poverty Survey Portal. This system
              helps collect, manage and analyze poverty survey data for
              better planning and implementation of government welfare
              schemes.
            </p>

            <div className="hero-buttons">

              <Link to="/survey">
                <button className="survey-btn">
                  Start Survey
                </button>
              </Link>

            </div>

          </div>

          <div className="hero-image">
            <img
  src={homeImage}
  alt="Poverty Survey"
/>
          </div>

        </section>

      

        <section className="features">

          <h2>Our Features</h2>

          <div className="feature-container">

            <div className="feature-card">
              <h3>📝 Online Survey</h3>
              <p>
                Citizens can submit poverty survey details online.
              </p>
            </div>

            <div className="feature-card">
              <h3>📊 Dashboard</h3>
              <p>
                View survey statistics and manage all records.
              </p>
            </div>

            <div className="feature-card">
              <h3>📈 Reports</h3>
              <p>
                Generate reports based on collected survey data.
              </p>
            </div>

            <div className="feature-card">
              <h3>🔒 Secure Admin</h3>
              <p>
                Only authorized administrators can access the dashboard.
              </p>
            </div>

          </div>

        </section>

        <About />

        <Contact />

      </div>

      <Footer />

    </>
  );
}

export default Home;