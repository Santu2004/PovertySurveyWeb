import mongoose from "mongoose";

const surveySchema = new mongoose.Schema(
  {
    // Personal Information
    fullName: String,
    dob: {
  type: Date,
  required: true,
},
pincode: {
  type: String,
  required: true,
},
block: {
  type: String,
  required: true,
},
    gender: String,
    mobile: String,
    aadhaar: String,
    state: String,
    district: String,
    village: String,
    address: String,

    // Family Details
    familyMembers: Number,
    children: Number,
    elderly: Number,
    earningMembers: Number,

    // Housing
    houseType: String,
    ownHouse: String,
    electricity: String,
    toilet: String,
    waterSource: String,

    // Income
    occupation: String,
    monthlyIncome: Number,
    employmentStatus: String,
    incomeSource: String,

    // Education
    education: String,
    childrenSchool: String,

    // Health
    healthInsurance: String,
    disability: String,
    hospitalDistance: Number,

    // Government Benefits
    rationCard: String,
    pension: String,
    welfareScheme: String,

    // Assets
    land: String,
    vehicle: String,
    smartphone: String,
    internet: String,

    // Financial Status
    bankAccount: String,
    loan: String,
    expenses: String,

    // Feedback
    challenge: String,
    assistance: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Survey", surveySchema);