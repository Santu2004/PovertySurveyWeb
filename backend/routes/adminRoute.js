import express from "express";
import {
  adminLogin,
  getDashboardStats,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/dashboard", getDashboardStats);

export default router;