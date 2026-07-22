import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LearnMore.css";

function LearnMore() {
  return (
    <>
      <Navbar />

      <section className="learn-more">

        <h1>About Online Poverty Survey</h1>

        <p className="intro">
          An online poverty survey is a digital method of collecting
          socio-economic information from households. It helps government
          organizations and administrators gather accurate data quickly,
          securely, and efficiently for planning welfare programs and
          development initiatives.
        </p>

        {/* Why Survey */}

        <div className="section">

          <h2>Why Poverty Surveys are Important?</h2>

          <ul>
            <li>Identify families living below the poverty line.</li>
            <li>Understand income, education, and employment conditions.</li>
            <li>Support planning of government welfare schemes.</li>
            <li>Improve resource allocation.</li>
            <li>Monitor community development.</li>
          </ul>

        </div>

        {/* Advantages */}

        <div className="section">

          <h2>Advantages of Online Surveys</h2>

          <div className="cards">

            <div className="card">
              <h3>⚡ Fast Data Collection</h3>
              <p>Collect information quickly using online forms.</p>
            </div>

            <div className="card">
              <h3>📄 Less Paperwork</h3>
              <p>Reduces manual documentation and errors.</p>
            </div>

            <div className="card">
              <h3>🔒 Secure Storage</h3>
              <p>Survey records are stored safely in a database.</p>
            </div>

            <div className="card">
              <h3>📊 Better Analysis</h3>
              <p>Generate reports for effective decision-making.</p>
            </div>

          </div>

        </div>

        {/* Information Collected */}

        <div className="section">

          <h2>Information Collected</h2>

          <ul>
            <li>Personal Information</li>
            <li>Family Details</li>
            <li>Housing Information</li>
            <li>Income Details</li>
            <li>Education Details</li>
            <li>Employment Status</li>
            <li>Healthcare Information</li>
            <li>Government Welfare Schemes</li>
            <li>Banking and Financial Details</li>
          </ul>

        </div>

        {/* Process */}

        <div className="section">

          <h2>Survey Process</h2>

          <div className="process">

            <div>1️⃣ Fill Survey Form</div>

            <div>⬇</div>

            <div>2️⃣ Submit Information</div>

            <div>⬇</div>

            <div>3️⃣ Data Validation</div>

            <div>⬇</div>

            <div>4️⃣ Store in Database</div>

            <div>⬇</div>

            <div>5️⃣ Generate Reports</div>

          </div>

        </div>

        {/* Benefits */}

        <div className="section">

          <h2>Benefits for Government & Organizations</h2>

          <ul>
            <li>Identify economically weaker families.</li>
            <li>Support welfare scheme implementation.</li>
            <li>Improve planning and policy making.</li>
            <li>Track socio-economic development.</li>
            <li>Enable faster and more informed decisions.</li>
          </ul>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default LearnMore;