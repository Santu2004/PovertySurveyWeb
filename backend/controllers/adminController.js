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

// ===============================
// Category Details
// ===============================
export const getCategoryData = async (req, res) => {
  try {
    const { type } = req.params;

    let data = [];

    switch (type) {
      case "all":
        data = await Survey.find();
        break;

      case "family-members":
        data = await Survey.find().sort({ familyMembers: -1 });
        break;

      case "average-income":
      case "income":
        data = await Survey.find().sort({ monthlyIncome: -1 });
        break;

      case "below-poverty":
        data = await Survey.find({
          monthlyIncome: { $lt: 10000 },
        });
        break;

      case "own-house":
        data = await Survey.find({
          ownHouse: "Yes",
        });
        break;

      case "no-electricity":
        data = await Survey.find({
          electricity: "No",
        });
        break;

      case "no-toilet":
        data = await Survey.find({
          toilet: "No",
        });
        break;

      case "no-insurance":
        data = await Survey.find({
          healthInsurance: "No",
        });
        break;

      case "internet-users":
        data = await Survey.find({
          internet: "Yes",
        });
        break;

      case "smartphone-users":
        data = await Survey.find({
          smartphone: "Yes",
        });
        break;

      default:
        return res.status(404).json({
          success: false,
          message: "Invalid category",
        });
    }

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};