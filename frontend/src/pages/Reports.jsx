import "./Reports.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";

function Reports() {
  const [report, setReport] = useState({
    totalSurveys: 0,
    totalFamilyMembers: 0,
    averageIncome: 0,
    belowPovertyLine: 0,
    ownHouse: 0,
    noElectricity: 0,
    noToilet: 0,
    noInsurance: 0,
    internetUsers: 0,
    smartphoneUsers: 0,
  });

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setReport(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="reports-container">
        <h1>Poverty Survey Report</h1>

        <div className="report-cards">
          <div className="report-card blue">
            <h2>Total Surveys</h2>
            <p>{report.totalSurveys}</p>
          </div>

          <div className="report-card green">
            <h2>Total Family Members</h2>
            <p>{report.totalFamilyMembers}</p>
          </div>

          <div className="report-card orange">
            <h2>Average Monthly Income</h2>
            <p>₹ {Number(report.averageIncome || 0).toFixed(0)}</p>
          </div>

          <div className="report-card red">
            <h2>Below Poverty Line</h2>
            <p>{report.belowPovertyLine}</p>
          </div>

          <div className="report-card">
            <h2>Own Houses</h2>
            <p>{report.ownHouse}</p>
          </div>

          <div className="report-card">
            <h2>No Electricity</h2>
            <p>{report.noElectricity}</p>
          </div>

          <div className="report-card">
            <h2>No Toilet</h2>
            <p>{report.noToilet}</p>
          </div>

          <div className="report-card">
            <h2>No Health Insurance</h2>
            <p>{report.noInsurance}</p>
          </div>

          <div className="report-card">
            <h2>Internet Users</h2>
            <p>{report.internetUsers}</p>
          </div>

          <div className="report-card">
            <h2>Smartphone Users</h2>
            <p>{report.smartphoneUsers}</p>
          </div>
        </div>

        <div className="report-table">
          <h2>Survey Summary</h2>

          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Total Surveys</td>
                <td>{report.totalSurveys}</td>
              </tr>

              <tr>
                <td>Total Family Members</td>
                <td>{report.totalFamilyMembers}</td>
              </tr>

              <tr>
                <td>Average Monthly Income</td>
                <td>₹ {Number(report.averageIncome || 0).toFixed(0)}</td>
              </tr>

              <tr>
                <td>Families Below Poverty Line</td>
                <td>{report.belowPovertyLine}</td>
              </tr>

              <tr>
                <td>Families Owning Houses</td>
                <td>{report.ownHouse}</td>
              </tr>

              <tr>
                <td>Families Without Electricity</td>
                <td>{report.noElectricity}</td>
              </tr>

              <tr>
                <td>Families Without Toilets</td>
                <td>{report.noToilet}</td>
              </tr>

              <tr>
                <td>Families Without Health Insurance</td>
                <td>{report.noInsurance}</td>
              </tr>

              <tr>
                <td>Families With Internet</td>
                <td>{report.internetUsers}</td>
              </tr>

              <tr>
                <td>Families With Smartphones</td>
                <td>{report.smartphoneUsers}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="analysis-summary">
          <h2>Survey Analysis Summary</h2>

          <p>
            A total of <strong>{report.totalSurveys}</strong> families were
            surveyed, covering{" "}
            <strong>{report.totalFamilyMembers}</strong> family members.
          </p>

          <p>
            The average monthly income is{" "}
            <strong>₹{Number(report.averageIncome || 0).toFixed(0)}</strong>.
            There are <strong>{report.belowPovertyLine}</strong> families living
            below the poverty line.
          </p>

          <p>
            <strong>{report.ownHouse}</strong> families own their houses, while{" "}
            <strong>{report.noElectricity}</strong> families do not have
            electricity and <strong>{report.noToilet}</strong> families do not
            have toilet facilities.
          </p>

          <p>
            <strong>{report.noInsurance}</strong> families do not have health
            insurance. <strong>{report.internetUsers}</strong> families have
            internet access and <strong>{report.smartphoneUsers}</strong>{" "}
            families own smartphones.
          </p>

          <h3>Overall Conclusion</h3>

          <p>
            The survey provides an overview of the socio-economic condition of
            the surveyed community. The information can help identify families
            that require assistance in housing, healthcare, sanitation, and
            government welfare schemes.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Reports;