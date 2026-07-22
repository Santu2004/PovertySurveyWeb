import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LearnMore.css";

function LearnMore() {
  return (
    <>
      <Navbar />

      <div className="learn-container">
        <h1>About Poverty Survey Management System</h1>

        <p>
          The Poverty Survey Management System is a full-stack web application
          developed to simplify the process of collecting, storing, and
          analyzing household survey data.
        </p>

        <h2>Objectives</h2>

        <ul>
          <li>Digital data collection</li>
          <li>Reduce paperwork</li>
          <li>Secure data storage</li>
          <li>Generate reports</li>
          <li>Support government welfare planning</li>
        </ul>

        <h2>Technologies Used</h2>

        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
        </ul>

        <h2>Key Features</h2>

        <ul>
          <li>Online Survey Form</li>
          <li>Admin Dashboard</li>
          <li>Survey Reports</li>
          <li>Responsive Design</li>
          <li>Secure Database</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default LearnMore;