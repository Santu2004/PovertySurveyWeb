import db from "../models/db.js";


export const getAllSurveys = (req, res) => {
  const sql = "SELECT * FROM surveys ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error fetching survey data",
        error: err,
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  });
};


export const addSurvey = (req, res) => {
  const {
  fullName,
  age,
  gender,
  mobile,
  aadhaar,
  state,
  district,
  village,
  address,
  familyMembers,
  children,
  elderly,
  earningMembers,
  houseType,
  ownHouse,
  electricity,
  toilet,
  waterSource,
  occupation,
  monthlyIncome,
  employmentStatus,
  incomeSource,
  education,
  childrenSchool,
  healthInsurance,
  disability,
  hospitalDistance,
  rationCard,
  pension,
  welfareScheme,
  land,
  vehicle,
  smartphone,
  internet,
  bankAccount,
  loan,
  expenses,
  challenge,
  assistance,
} = req.body;

 const sql = `
INSERT INTO surveys (
fullName,
age,
gender,
mobile,
aadhaar,
state,
district,
village,
address,
familyMembers,
children,
elderly,
earningMembers,
houseType,
ownHouse,
electricity,
toilet,
waterSource,
occupation,
monthlyIncome,
employmentStatus,
incomeSource,
education,
childrenSchool,
healthInsurance,
disability,
hospitalDistance,
rationCard,
pension,
welfareScheme,
land,
vehicle,
smartphone,
internet,
bankAccount,
loan,
expenses,
challenge,
assistance
)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
`;

 const values = [
  fullName,
  age,
  gender,
  mobile,
  aadhaar,
  state,
  district,
  village,
  address,
  familyMembers,
  children,
  elderly,
  earningMembers,
  houseType,
  ownHouse,
  electricity,
  toilet,
  waterSource,
  occupation,
  monthlyIncome,
  employmentStatus,
  incomeSource,
  education,
  childrenSchool,
  healthInsurance,
  disability,
  hospitalDistance,
  rationCard,
  pension,
  welfareScheme,
  land,
  vehicle,
  smartphone,
  internet,
  bankAccount,
  loan,
  expenses,
  challenge,
  assistance,
];
console.log("Request Body:", req.body);
console.log("Values:", values);
db.query(sql, values, (err, result) => {
  if (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Survey not submitted",
      error: err,
    });
  }

  res.status(201).json({
    success: true,
    message: "Survey submitted successfully",
    surveyId: result.insertId,
  });
});
}

export const deleteSurvey = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM surveys WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Delete failed",
        error: err,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Survey not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Survey deleted successfully",
    });
  });
};