import db from "../models/db.js";

// Admin Login
export const adminLogin = (req, res) => {
  const { username, password } = req.body;

  const sql =
    "SELECT * FROM admin WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username or Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
      admin: {
        id: result[0].id,
        username: result[0].username,
      },
    });
  });
};

// Dashboard Statistics
export const getDashboardStats = (req, res) => {
  const sql = `
    SELECT
      COUNT(*) AS totalSurveys,
      SUM(familyMembers) AS totalFamilyMembers,
      AVG(monthlyIncome) AS averageIncome,
      SUM(CASE WHEN monthlyIncome < 10000 THEN 1 ELSE 0 END) AS belowPovertyLine,
      SUM(CASE WHEN ownHouse = 'Yes' THEN 1 ELSE 0 END) AS ownHouse,
      SUM(CASE WHEN electricity = 'No' THEN 1 ELSE 0 END) AS noElectricity,
      SUM(CASE WHEN toilet = 'No' THEN 1 ELSE 0 END) AS noToilet,
      SUM(CASE WHEN healthInsurance = 'No' THEN 1 ELSE 0 END) AS noInsurance,
      SUM(CASE WHEN internet = 'Yes' THEN 1 ELSE 0 END) AS internetUsers,
      SUM(CASE WHEN smartphone = 'Yes' THEN 1 ELSE 0 END) AS smartphoneUsers
    FROM surveys
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
        error: err,
      });
    }

    res.status(200).json({
      success: true,
      data: result[0],
    });
  });
};