import "./Responses.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

function Responses() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    loadSurveys();
  }, []);

  const loadSurveys = async () => {
    try {
      const res = await api.get("/survey");
console.log(res.data);
setSurveys(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSurvey = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this survey?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/survey/${id}`);
      alert("Survey Deleted Successfully");
      loadSurveys();
    } catch (err) {
      console.error(err);
      alert("Unable to delete survey.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="responses-container">
        <h1>Poverty Survey Responses</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Village</th>
              <th>Occupation</th>
              <th>Monthly Income</th>
              <th>Family Members</th>
              <th>House Type</th>
              <th>Electricity</th>
              <th>Toilet</th>
              <th>Health Insurance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {surveys.map((survey) => (
              <tr key={survey.id}>
                <td>{survey.id}</td>
                <td>{survey.fullName}</td>
                <td>{survey.mobile}</td>
                <td>{survey.age}</td>
                <td>{survey.gender}</td>
                <td>{survey.village}</td>
                <td>{survey.occupation}</td>
                <td>₹ {survey.monthlyIncome}</td>
                <td>{survey.familyMembers}</td>
                <td>{survey.houseType}</td>
                <td>{survey.electricity}</td>
                <td>{survey.toilet}</td>
                <td>{survey.healthInsurance}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteSurvey(survey.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default Responses;