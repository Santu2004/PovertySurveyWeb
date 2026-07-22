import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">
        <h1>About Us</h1>

        <p>
          The Poverty Survey Management System helps collect, manage, and
          analyze poverty survey data efficiently. It supports government
          authorities in identifying eligible beneficiaries for welfare schemes.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;