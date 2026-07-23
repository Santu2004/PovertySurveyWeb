import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">
        <h1>About Poverty Survey Management System</h1>

        <p>
          The Poverty Survey Management System is a web-based application
          developed to simplify the process of collecting, storing, and managing
          household survey information. The system enables government
          organizations, NGOs, and local authorities to collect accurate data
          from citizens and identify families that require financial assistance
          and welfare benefits.
        </p>

        <h2>Our Vision</h2>

        <p>
          Our vision is to build a transparent and efficient digital platform
          that supports poverty reduction programs by providing reliable survey
          data for informed decision-making.
        </p>

        <h2>Our Mission</h2>

        <p>
          Our mission is to replace paper-based surveys with an easy-to-use
          digital system that minimizes errors, improves data accuracy, and
          allows faster report generation.
        </p>

        <h2>Key Features</h2>

        <ul>
          <li>Online household survey submission</li>
          <li>Secure admin login and dashboard</li>
          <li>Survey response management</li>
          <li>Automatic report generation</li>
          <li>Data analysis and statistics</li>
          <li>User-friendly interface</li>
          <li>Responsive design for different devices</li>
        </ul>

        <h2>Benefits</h2>

        <p>
          The system reduces manual paperwork, saves time, improves the
          accuracy of collected information, and helps authorities identify
          eligible beneficiaries more effectively.
        </p>

       
        
      </div>

      <Footer />
    </>
  );
}

export default About;