import db from "./db.js";

export const getAllSurveys = (callback) => {
  const sql = "SELECT * FROM surveys ORDER BY id DESC";
  db.query(sql, callback);
};


export const addSurvey = (data, callback) => {
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
    VALUES (
      ?,?,?,?,?,?,?,?,?,?,
      ?,?,?,?,?,?,?,?,?,?,
      ?,?,?,?,?,?,?,?,?,?,
      ?,?,?,?,?,?,?,?,?
    )
  `;

  const values = [
    data.fullName,
    data.age,
    data.gender,
    data.mobile,
    data.aadhaar,
    data.state,
    data.district,
    data.village,
    data.address,
    data.familyMembers,
    data.children,
    data.elderly,
    data.earningMembers,
    data.houseType,
    data.ownHouse,
    data.electricity,
    data.toilet,
    data.waterSource,
    data.occupation,
    data.monthlyIncome,
    data.employmentStatus,
    data.incomeSource,
    data.education,
    data.childrenSchool,
    data.healthInsurance,
    data.disability,
    data.hospitalDistance,
    data.rationCard,
    data.pension,
    data.welfareScheme,
    data.land,
    data.vehicle,
    data.smartphone,
    data.internet,
    data.bankAccount,
    data.loan,
    data.expenses,
    data.challenge,
    data.assistance,
  ];

  db.query(sql, values, callback);
};


export const deleteSurvey = (id, callback) => {
  const sql = "DELETE FROM surveys WHERE id = ?";
  db.query(sql, [id], callback);
};