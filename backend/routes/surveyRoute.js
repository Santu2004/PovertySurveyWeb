import express from "express";
import {
  getAllSurveys,
  addSurvey,
  deleteSurvey,
} from "../controllers/surveyController.js";

const router = express.Router();

router.get("/", getAllSurveys);

router.post("/", addSurvey);

router.delete("/:id", deleteSurvey);

export default router;