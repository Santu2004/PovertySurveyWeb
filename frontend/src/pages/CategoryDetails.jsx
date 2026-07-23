import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";
import "./CategoryDetails.css";

function CategoryDetails() {
  const { type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const title = location.state?.title || "Category Details";

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryData();
  }, [type]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/admin/category/${type}`);

      if (res.data.success) {
        setPeople(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="category-container">
        <div className="category-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <h1>{title}</h1>
        </div>

        {loading ? (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          <table className="category-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Village</th>
                <th>Monthly Income</th>
                <th>Family Members</th>
                <th>Own House</th>
              </tr>
            </thead>

            <tbody>
              {people.length > 0 ? (
                people.map((person) => (
                  <tr key={person._id}>
                    <td>{person.fullName}</td>
                    <td>{person.mobile}</td>
                    <td>{person.village}</td>
                    <td>₹ {person.monthlyIncome}</td>
                    <td>{person.familyMembers}</td>
                    <td>{person.ownHouse}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-data">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CategoryDetails;