import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-container">
        <h1>Contact Us</h1>

        <p>Email: support@povertysurvey.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Address: Bhubaneswar, Odisha, India</p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;