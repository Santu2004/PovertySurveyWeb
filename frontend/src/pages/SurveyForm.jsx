
import api from "../api";
import { useNavigate } from "react-router-dom";
import "./SurveyForm.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SurveyForm() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log(formData);

    const res = await api.post("/survey", formData);

    alert(res.data.message);

    navigate("/thankyou");
  } catch (err) {
    console.error(err);

    alert("Survey submission failed.");
  }
};
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({

    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    aadhaar: "",
    pincode: "",
block: "",
    state: "",
    district: "",
    village: "",
    address: "",

    
    familyMembers: "",
    children: "",
    elderly: "",
    earningMembers: "",

    
    houseType: "",
    ownHouse: "",
    electricity: "",
    toilet: "",
    waterSource: "",

    
    occupation: "",
    monthlyIncome: "",
    employmentStatus: "",
    incomeSource: "",

    
    education: "",
    childrenSchool: "",

    
    healthInsurance: "",
    disability: "",
    hospitalDistance: "",

    
    rationCard: "",
    pension: "",
    welfareScheme: "",

    
    land: "",
    vehicle: "",
    smartphone: "",
    internet: "",

    
    bankAccount: "",
    loan: "",
    expenses: "",

    
    challenge: "",
    assistance: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const getPincodeDetails = async (pincode) => {
  if (pincode.length !== 6) return;

  try {
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );

    const data = await response.json();

    if (
      data[0].Status === "Success" &&
      data[0].PostOffice.length > 0
    ) {
      const office = data[0].PostOffice[0];

      setFormData((prev) => ({
        ...prev,
        state: office.State,
        district: office.District,
        block: office.Block || "",
      }));
    } else {
      alert("Invalid PIN Code");
    }
  } catch (error) {
    console.error(error);
  }
};

 const nextStep = () => {
  const currentStepFields = document.querySelectorAll(
    `.survey-card input, .survey-card select, .survey-card textarea`
  );

  for (const field of currentStepFields) {
    if (field.offsetParent !== null && !field.checkValidity()) {
      field.reportValidity(); // Shows "Please fill out this field."
      return;
    }
  }

  setStep(step + 1);
};
  const prevStep = () => setStep(step - 1);

  return (
    <>
      <Navbar />

      <div className="survey-container">
        <div className="survey-card">

          <h1>Poverty Survey Form</h1>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${step * 20}%` }}
            ></div>
          </div>

          <p className="step-text">
            Step {step} of 5
          </p>

          <form onSubmit={handleSubmit}>

            {step === 1 && (
              <>

                <h2 className="section-title">
                  Personal Information
                </h2>

                <div className="input-group">
                               <label>
  Full Name <span className="required">*</span>
</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
  <label>
    Date of Birth <span className="required">*</span>
  </label>

  <input
    type="date"
    name="dob"
    value={formData.dob}
    onChange={handleChange}
    required
  />
</div>

                <div className="input-group">
                                <label>
  Gender<span className="required">*</span>
</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="input-group">
                <label>
  Mobile Number <span className="required">*</span>
</label>

<input
  type="tel"
  name="mobile"
  value={formData.mobile}
  onChange={handleChange}
  maxLength={10}
  pattern="[0-9]{10}"
  required
/>
                </div>

                <div className="input-group">
                  <label>
  Aadhaar Number <span className="required">*</span>
</label>

<input
  type="text"
  name="aadhaar"
  value={formData.aadhaar}
  onChange={handleChange}
  maxLength={12}
  pattern="[0-9]{12}"
  required
/>
                </div>
                <div className="input-group">
  <label>
    PIN Code <span className="required">*</span>
  </label>

  <input
    type="text"
    name="pincode"
    value={formData.pincode}
    maxLength={6}
    pattern="[0-9]{6}"
    onChange={(e) => {
      handleChange(e);
      getPincodeDetails(e.target.value);
    }}
    required
  />
</div>

                <div className="input-group">
                                <label>
  State <span className="required">*</span>
</label>
                  <input
  type="text"
  name="state"
  value={formData.state}
  readOnly
  required
/>
                </div>

                <div className="input-group">
                                <label>
  District <span className="required">*</span>
</label>
                 <input
  type="text"
  name="district"
  value={formData.district}
  readOnly
  required
/>
                </div>
                <div className="input-group">
  <label>
    Block <span className="required">*</span>
  </label>

  <input
    type="text"
    name="block"
    value={formData.block}
    readOnly
    required
  />
</div>

                <div className="input-group">
                                <label>
  Village/City <span className="required">*</span>
</label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Address</label>
                  <textarea
                    rows="4"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  
                  ></textarea>
                </div>

                <div className="button-group">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={nextStep}
                  >
                    Next →
                  </button>
                </div>

              </>
            )}
            {step === 2 && (
  <>
    <h2 className="section-title">Family Details</h2>

    <div className="input-group">
                    <label>
  Number Of Family Members <span className="required">*</span>
</label>
      <input
        type="number"
        name="familyMembers"
        value={formData.familyMembers}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input-group">
      <label>Number of Children</label>
      <input
        type="number"
        name="children"
        value={formData.children}
        onChange={handleChange}
      
      />
    </div>

    <div className="input-group">
      <label>Number of Elderly (60+)</label>
      <input
        type="number"
        name="elderly"
        value={formData.elderly}
        onChange={handleChange}
      />
    </div>

    <div className="input-group">
                    <label>
  Number Of Earning Members <span className="required">*</span>
</label>
      <input
        type="number"
        name="earningMembers"
        value={formData.earningMembers}
        onChange={handleChange}
        required
      />
    </div>

    <h2 className="section-title">Housing Details</h2>

    <div className="input-group">
                   <label>
  Type Of House<span className="required">*</span>
</label>
      <select
        name="houseType"
        value={formData.houseType}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Pucca">Pucca</option>
        <option value="Semi-Pucca">Semi-Pucca</option>
        <option value="Kutcha">Kutcha</option>
      </select>
    </div>

    <div className="input-group">
      <label>Do you own the house?<span className="required">*</span></label>
      <select
        name="ownHouse"
        value={formData.ownHouse}
        onChange={handleChange}
    
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Do you have electricity?<span className="required">*</span></label>
      <select
        name="electricity"
        value={formData.electricity}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Do you have a toilet?<span className="required">*</span></label>
      <select
        name="toilet"
        value={formData.toilet}
        onChange={handleChange}
        required
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Source of Drinking Water<span className="required">*</span></label>
      <select
        name="waterSource"
        value={formData.waterSource}
        onChange={handleChange}
        required
        
      >
        <option value="">Select</option>
        <option value="Tap Water">Tap Water</option>
        <option value="Borewell">Borewell</option>
        <option value="Well">Well</option>
        <option value="River/Pond">River / Pond</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="button-group">
      <button
        type="button"
        className="prev-btn"
        onClick={prevStep}
      >
        ← Previous
      </button>

      <button
        type="button"
        className="next-btn"
        onClick={nextStep}
      >
        Next →
      </button>
    </div>
  </>
)}
{step === 3 && (
  <>
    <h2 className="section-title">Income & Employment</h2>

    <div className="input-group">
                    <label>
  Ocupation <span className="required">*</span>
</label>
      <input
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input-group">
                  <label>
  Monthly Family Income <span className="required">*</span>
</label>
      <input
        type="number"
        name="monthlyIncome"
        value={formData.monthlyIncome}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input-group">
      <label>Employment Status<span className="required">*</span></label>
      <select
        name="employmentStatus"
        value={formData.employmentStatus}
        onChange={handleChange}
        required
        
      >
        <option value="">Select</option>
        <option value="Employed">Employed</option>
        <option value="Self-employed">Self-employed</option>
        <option value="Unemployed">Unemployed</option>
      </select>
    </div>

    <div className="input-group">
      <label>Main Source of Income</label>
      <select
        name="incomeSource"
        value={formData.incomeSource}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Business">Business</option>
        <option value="Daily Wage">Daily Wage</option>
        <option value="Salary">Salary</option>
        <option value="Pension">Pension</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <h2 className="section-title">Education</h2>

    <div className="input-group">
      <label>Highest Education Level</label>
      <select
        name="education"
        value={formData.education}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="No Education">No Education</option>
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
        <option value="Higher Secondary">Higher Secondary</option>
        <option value="Graduate">Graduate</option>
        <option value="Postgraduate">Postgraduate</option>
      </select>
    </div>

    <div className="input-group">
      <label>Are all children attending school?</label>
      <select
        name="childrenSchool"
        value={formData.childrenSchool}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Not Applicable">Not Applicable</option>
      </select>
    </div>

    <h2 className="section-title">Health</h2>

    <div className="input-group">
      <label>Do you have Health Insurance?<span className="required">*</span></label>
      <select
        name="healthInsurance"
        value={formData.healthInsurance}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Any Family Member with Disability?</label>
      <select
        name="disability"
        value={formData.disability}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Distance to Nearest Hospital (KM)</label>
      <input
        type="number"
        name="hospitalDistance"
        value={formData.hospitalDistance}
        onChange={handleChange}
        required
      />
    </div>

    <div className="button-group">
      <button
        type="button"
        className="prev-btn"
        onClick={prevStep}
      >
        ← Previous
      </button>

      <button
        type="button"
        className="next-btn"
        onClick={nextStep}
      >
        Next →
      </button>
    </div>
  </>
)}
{step === 4 && (
  <>
    <h2 className="section-title">Government Benefits</h2>

    <div className="input-group">
      <label>
  Ration Card<span className="required">*</span>
</label>
      <select
        name="rationCard"
        value={formData.rationCard}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="APL">APL</option>
        <option value="BPL">BPL</option>
        <option value="None">None</option>
      </select>
    </div>

    <div className="input-group">
      <label>Do you receive Government Pension?</label>
      <select
        name="pension"
        value={formData.pension}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Benefited from Government Welfare Scheme?</label>
      <select
        name="welfareScheme"
        value={formData.welfareScheme}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <h2 className="section-title">Assets</h2>

    <div className="input-group">
      <label>Own Agricultural Land?</label>
      <select
        name="land"
        value={formData.land}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Own a Vehicle?</label>
      <select
        name="vehicle"
        value={formData.vehicle}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Have a Smartphone?</label>
      <select
        name="smartphone"
        value={formData.smartphone}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Internet Access?</label>
      <select
        name="internet"
        value={formData.internet}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="button-group">
      <button
        type="button"
        className="prev-btn"
        onClick={prevStep}
      >
        ← Previous
      </button>

      <button
        type="button"
        className="next-btn"
        onClick={nextStep}
      >
        Next →
      </button>
    </div>
  </>
)}
{step === 5 && (
  <>
    <h2 className="section-title">Financial Status</h2>

    <div className="input-group">
                    <label>
  Do you have a bank account? <span className="required">*</span>
</label>
      <select
        name="bankAccount"
        value={formData.bankAccount}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Do you have any Outstanding Loan?</label>
      <select
        name="loan"
        value={formData.loan}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="input-group">
      <label>Can you meet Monthly Household Expenses?</label>
      <select
        name="expenses"
        value={formData.expenses}
        onChange={handleChange}
        
      >
        <option value="">Select</option>
        <option value="Easily">Easily</option>
        <option value="Sometimes">Sometimes</option>
        <option value="Difficult">Difficult</option>
      </select>
    </div>

    <h2 className="section-title">Feedback</h2>

    <div className="input-group">
      <label>Biggest Challenge Faced by Your Family</label>
      <textarea
        rows="4"
        name="challenge"
        value={formData.challenge}
        onChange={handleChange}
        
      ></textarea>
    </div>

    <div className="input-group">
                   <label>
  What Assistance Do You Need Most?<span className="required">*</span>
</label>

      <select
        name="assistance"
        value={formData.assistance}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Employment">Employment</option>
        <option value="Education">Education</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Food Assistance">Food Assistance</option>
        <option value="Housing">Housing</option>
        <option value="Financial Support">Financial Support</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="button-group">
      <button
        type="button"
        className="prev-btn"
        onClick={prevStep}
      >
        ← Previous
      </button>

      <button
        type="submit"
        className="submit-btn"
      >
        Submit Survey
      </button>
    </div>
  </>
)}
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SurveyForm;