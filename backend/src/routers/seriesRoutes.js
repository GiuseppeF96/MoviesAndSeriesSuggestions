import express from "express";
import {
  getSeries,
  findSeriesByName,
  findSeriesById,
  addSerie,
  newSerieValidators,
  patchSerie,
  deleteSerie,
  getRandomSerie,
} from "../controllers/seriesController.js";

const router = express.Router();

router.get("/", getSeries);
router.get("/search", findSeriesByName);
router.get("/id/:id", findSeriesById);
router.post("/", newSerieValidators, addSerie);
router.patch("/id/:id", patchSerie);
router.delete("/id/:id", deleteSerie);
router.get("/randomizer", getRandomSerie);

export default router;
