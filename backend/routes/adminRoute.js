import express from "express";
import {
  adminLogin,
  getDashboardStats,
  getCategoryData,
} from "../controllers/adminController.js";

const router = express.Router();

// Admin Login
router.post("/login", adminLogin);

// Dashboard Statistics
router.get("/dashboard", getDashboardStats);

// Category Details
router.get("/category/:type", getCategoryData);

export default router;