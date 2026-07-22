import Survey from "../models/gj.js";

// ========================================
// Get All Surveys
// ========================================
export const getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: surveys,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching survey data",
      error: err.message,
    });
  }
};

// ========================================
// Add Survey
// ========================================
export const addSurvey = async (req, res) => {
  try {
    const survey = await Survey.create(req.body);

    res.status(201).json({
      success: true,
      message: "Survey submitted successfully",
      surveyId: survey._id,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Survey not submitted",
      error: err.message,
    });
  }
};

// ========================================
// Delete Survey
// ========================================
export const deleteSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);

    if (!survey) {
      return res.status(404).json({
        success: false,
        message: "Survey not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Survey deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
      error: err.message,
    });
  }
};