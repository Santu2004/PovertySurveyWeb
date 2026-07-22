import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SurveyForm from "./pages/SurveyForm";
import ThankYou from "./pages/ThankYou";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Responses from "./pages/Responses";
import Reports from "./pages/Reports";
import LearnMore from "./pages/LearnMore";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/thankyou" element={<ThankYou />} />

        {/* Admin Pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/responses" element={<Responses />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;