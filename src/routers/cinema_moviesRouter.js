import express from "express";
import {
  getCinema_movie,
  findCinema_movieByName,
  findCinema_movieById,
  addCinema_movie,
  newCinema_movieValidators,
} from "../controllers/cinema_moviesController.js";

const router = express.Router();

router.get("/", getCinema_movie);
router.get("/search", findCinema_movie);
router.get("/:id", findCinema_movieById);
router.post("/", newCinema_movieValidators, addCinema_movie);

export default router;
