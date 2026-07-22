import Admin from "../models/Admin.js";
import Survey from "../models/Survey.js";

// ===============================
// Admin Login
// ===============================
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({
      username,
      password,
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username or Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
      admin: {
        id: admin._id,
        username: admin.username,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ===============================
// Dashboard Statistics
// ===============================
export const getDashboardStats = async (req, res) => {
  try {
    const surveys = await Survey.find();

    const stats = {
      totalSurveys: surveys.length,
      totalFamilyMembers: 0,
      averageIncome: 0,
      belowPovertyLine: 0,
      ownHouse: 0,
      noElectricity: 0,
      noToilet: 0,
      noInsurance: 0,
      internetUsers: 0,
      smartphoneUsers: 0,
    };

    let totalIncome = 0;

    surveys.forEach((survey) => {
      stats.totalFamilyMembers += Number(survey.familyMembers || 0);

      const income = Number(survey.monthlyIncome || 0);
      totalIncome += income;

      if (income < 10000) stats.belowPovertyLine++;

      if (survey.ownHouse === "Yes") stats.ownHouse++;

      if (survey.electricity === "No") stats.noElectricity++;

      if (survey.toilet === "No") stats.noToilet++;

      if (survey.healthInsurance === "No") stats.noInsurance++;

      if (survey.internet === "Yes") stats.internetUsers++;

      if (survey.smartphone === "Yes") stats.smartphoneUsers++;
    });

    stats.averageIncome =
      surveys.length > 0
        ? Math.round(totalIncome / surveys.length)
        : 0;

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};