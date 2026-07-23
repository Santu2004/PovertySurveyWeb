import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-container">
        <h1>Contact Us</h1>

        <p>
          We are committed to providing support and assistance regarding the
          Poverty Survey Management System. If you have any questions,
          suggestions, or feedback, please feel free to contact us.
        </p>

        <h2>Office Address</h2>

        <p>
          Poverty Survey Management Office<br />
          Rayagada, Odisha<br />
          India, Pin Code - 765001
        </p>

        <h2>Contact Information</h2>

        <p><strong>Email:</strong> support@povertysurvey.com</p>

        <p><strong>Phone:</strong> +91 8260591547,8260639982</p>

        <p><strong>Website:</strong> www.povertysurvey.com</p>

        <h2>Office Hours</h2>

        <ul>
          <li>Monday - Friday : 9:00 AM - 5:00 PM</li>
          <li>Saturday : 10:00 AM - 2:00 PM</li>
          <li>Sunday : Closed</li>
        </ul>

        <h2>Support Services</h2>

        <ul>
          <li>Technical Support</li>
          <li>Survey Assistance</li>
          <li>Admin Support</li>
          <li>Report Generation Help</li>
          <li>General Enquiries</li>
        </ul>

        <h2>Feedback</h2>

        <p>
          Your suggestions help us improve our services. We appreciate your
          valuable feedback and continuously work to enhance the user
          experience.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;