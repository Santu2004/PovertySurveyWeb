import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load .env first

import connectDB from "./config/db.js";

import surveyRoute from "./routes/surveyRoute.js";
import adminRoute from "./routes/adminRoute.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/survey", surveyRoute);
app.use("/api/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("Poverty Survey API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});