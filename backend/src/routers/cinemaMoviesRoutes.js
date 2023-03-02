import express from "express";
import {
  getCinema_movie,
  findCinema_movieByName,
  findCinema_movieById,
  addCinema_movie,
  newCinMovieValidators,
  patchCinema_movie,
  deleteCinema_movie,
  getRandomCinema_movie,
} from "../controllers/cinemaMoviesController.js";

const router = express.Router();

router.get("/", getCinema_movie);
router.get("/search", findCinema_movieByName);
router.get("/id/:id", findCinema_movieById);
router.post("/", newCinMovieValidators, addCinema_movie);
router.patch("/id/:id", patchCinema_movie);
router.delete("/id/:id", deleteCinema_movie);
router.get("/randomizer", getRandomCinema_movie);

export default router;
