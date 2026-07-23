import "./Reports.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function Reports() {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A020F0",
  ];

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
  const reportRef = useRef(null);

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
  const handlePrint = useReactToPrint({
  contentRef: reportRef,
  documentTitle: "Poverty Survey Report",
});
const exportPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Poverty Survey Report", 14, 20);

  autoTable(doc, {
    startY: 30,
    head: [["Category", "Value"]],
    body: [
      ["Total Surveys", report.totalSurveys],
      ["Total Family Members", report.totalFamilyMembers],
      ["Average Monthly Income", `₹ ${report.averageIncome}`],
      ["Below Poverty Line", report.belowPovertyLine],
      ["Own Houses", report.ownHouse],
      ["No Electricity", report.noElectricity],
      ["No Toilet", report.noToilet],
      ["No Health Insurance", report.noInsurance],
      ["Internet Users", report.internetUsers],
      ["Smartphone Users", report.smartphoneUsers],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [13, 110, 253],
      textColor: 255,
      fontStyle: "bold",
    },
    styles: {
      fontSize: 11,
      cellPadding: 4,
    },
  });

  doc.save("PovertySurveyReport.pdf");
};
const exportExcel = () => {
  const data = [
    {
      Category: "Total Surveys",
      Value: report.totalSurveys,
    },
    {
      Category: "Total Family Members",
      Value: report.totalFamilyMembers,
    },
    {
      Category: "Average Monthly Income",
      Value: report.averageIncome,
    },
    {
      Category: "Below Poverty Line",
      Value: report.belowPovertyLine,
    },
    {
      Category: "Own Houses",
      Value: report.ownHouse,
    },
    {
      Category: "No Electricity",
      Value: report.noElectricity,
    },
    {
      Category: "No Toilet",
      Value: report.noToilet,
    },
    {
      Category: "No Health Insurance",
      Value: report.noInsurance,
    },
    {
      Category: "Internet Users",
      Value: report.internetUsers,
    },
    {
      Category: "Smartphone Users",
      Value: report.smartphoneUsers,
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Survey Report"
  );

  XLSX.writeFile(workbook, "PovertySurveyReport.xlsx");
};

  // =============================
  // Chart Data
  // =============================

  const surveyData = [
    {
      name: "Surveys",
      value: report.totalSurveys,
    },
    {
      name: "Family Members",
      value: report.totalFamilyMembers,
    },
  ];

  const incomeData = [
    {
      name: "Average Income",
      value: report.averageIncome,
    },
    {
      name: "Below Poverty",
      value: report.belowPovertyLine,
    },
  ];

  const facilityData = [
    {
      name: "Own House",
      value: report.ownHouse,
    },
    {
      name: "No Electricity",
      value: report.noElectricity,
    },
    {
      name: "No Toilet",
      value: report.noToilet,
    },
    {
      name: "No Insurance",
      value: report.noInsurance,
    },
  ];

  const digitalData = [
    {
      name: "Internet",
      value: report.internetUsers,
    },
    {
      name: "Smartphone",
      value: report.smartphoneUsers,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="reports-container">
         <div ref={reportRef}>
        <div className="report-actions">

    <button onClick={handlePrint}>
        🖨️ Print Report
    </button>

    <button onClick={exportPDF}>
        📄 Export PDF
    </button>

    <button onClick={exportExcel}>
        📊 Export Excel
    </button>

</div>

        <h1>Poverty Survey Report</h1>

        {/* ==========================
            Summary Cards
        =========================== */}

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
            <p>
              ₹ {Number(report.averageIncome || 0).toFixed(0)}
            </p>
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

        {/* ==========================
            Survey Overview
        =========================== */}

        <div className="chart-box">

          <h2>Survey Overview</h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={surveyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="value"
                fill="#0d6efd"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* ==========================
            Income Analysis
        =========================== */}

        <div className="chart-box">

          <h2>Income Analysis</h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="value"
                fill="#28a745"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>
                {/* ==========================
            Housing & Basic Facilities
        =========================== */}

        <div className="chart-box">
          <h2>Housing & Basic Facilities</h2>

          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={facilityData}
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {facilityData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* ==========================
            Digital Access
        =========================== */}

        <div className="chart-box">
          <h2>Digital Access</h2>

          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={digitalData}
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#82ca9d"
                dataKey="value"
                label
              >
                {digitalData.map((entry, index) => (
                  <Cell
                    key={`digital-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* ==========================
            Survey Summary Table
        =========================== */}

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
                <td>₹ {report.averageIncome}</td>
              </tr>

              <tr>
                <td>Below Poverty Line</td>
                <td>{report.belowPovertyLine}</td>
              </tr>

              <tr>
                <td>Own Houses</td>
                <td>{report.ownHouse}</td>
              </tr>

              <tr>
                <td>No Electricity</td>
                <td>{report.noElectricity}</td>
              </tr>

              <tr>
                <td>No Toilet</td>
                <td>{report.noToilet}</td>
              </tr>

              <tr>
                <td>No Health Insurance</td>
                <td>{report.noInsurance}</td>
              </tr>

              <tr>
                <td>Internet Users</td>
                <td>{report.internetUsers}</td>
              </tr>

              <tr>
                <td>Smartphone Users</td>
                <td>{report.smartphoneUsers}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ==========================
            Analysis Summary
        =========================== */}

        <div className="analysis-summary">

          <h2>Survey Analysis Summary</h2>

          <p>
            A total of <strong>{report.totalSurveys}</strong> households were
            surveyed, covering{" "}
            <strong>{report.totalFamilyMembers}</strong> family members.
          </p>

          <p>
            The average monthly income is{" "}
            <strong>₹ {report.averageIncome}</strong>.
          </p>

          <p>
            <strong>{report.belowPovertyLine}</strong> families are living
            below the poverty line.
          </p>

          <p>
            <strong>{report.ownHouse}</strong> families own houses,
            <strong> {report.noElectricity}</strong> families do not have
            electricity,
            <strong> {report.noToilet}</strong> families do not have toilet
            facilities.
          </p>

          <p>
            <strong>{report.noInsurance}</strong> families do not have health
            insurance.
          </p>

          <p>
            <strong>{report.internetUsers}</strong> families have internet
            access and
            <strong> {report.smartphoneUsers}</strong> families own
            smartphones.
          </p>

        </div>

        {/* ==========================
            Recommendations
        =========================== */}

        <div className="analysis-summary">

          <h2>Recommendations</h2>

          <ul>
            <li>Increase financial support for below-poverty-line families.</li>
            <li>Provide electricity to uncovered households.</li>
            <li>Improve sanitation by constructing toilets.</li>
            <li>Expand health insurance awareness and enrollment.</li>
            <li>Promote digital literacy and internet access.</li>
            <li>Strengthen government welfare scheme implementation.</li>
          </ul>

        </div>

      </div>
      </div>

      <Footer />
    </>
  );
}

export default Reports;