import express from "express";
import {
  getCinemaMovie,
  findCinemaMovieByName,
  findCinemaMovieById,
  addCinemaMovie,
  newCinMovieValidators,
  patchCinemaMovie,
  deleteCinemaMovie,
  getRandomCinemaMovie,
} from "../controllers/cinemaMoviesController.js";
// Create a router
const router = express.Router();
// Define routes
router.get("/", getCinemaMovie);
router.get("/search", findCinemaMovieByName);
router.get("/id/:id", findCinemaMovieById);
router.post("/", newCinMovieValidators, addCinemaMovie);
router.patch("/id/:id", patchCinemaMovie);
router.delete("/id/:id", deleteCinemaMovie);
router.get("/randomizer", getRandomCinemaMovie);

export default router;
