import express from "express";
import {
  getSeries,
  findSeriesByName,
  findSeriesById,
  addSerie,
  newSerieValidators,
} from "../controllers/seriesController.js";

const router = express.Router();

router.get("/", getSeries);
router.get("/search", findSeriesByName);
router.get("/:id", findSeriesById);
router.post("/", newSerieValidators, addSerie);

export default router;
