import express from "express";
import {
  getCinema_movie,
  findCinema_movieByName,
  findCinema_movieById,
  addCinema_movie,
  newCinMovieValidators,
} from "../controllers/cinema_moviesController.js";

const router = express.Router();

router.get("/", getCinema_movie);
router.get("/search", findCinema_movieByName);
router.get("/:id", findCinema_movieById);
router.post("/", newCinMovieValidators, addCinema_movie);

export default router;
