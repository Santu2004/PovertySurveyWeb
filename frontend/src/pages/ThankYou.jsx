import "./ThankYou.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ThankYou() {
  return (
    <>
      <Navbar />

      <div className="thankyou-container">
        <div className="thankyou-card">
          <h1>🎉 Thank You!!!</h1>

          <p>
            Your survey has been submitted successfully.
          </p>

          <p>
            Your response will help improve government planning and welfare
            programs.
          </p>

          <Link to="/">
            <button className="home-btn">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ThankYou;