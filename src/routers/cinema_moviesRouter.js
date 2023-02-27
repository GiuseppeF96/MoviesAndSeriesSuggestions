import express from "express";
import {
  getCinema_movie,
  findCinema_movieByName,
  findCinema_movieById,
  addCinema_movie,
  newCinMovieValidators,
} from "../controllers/cinema_moviesController.js";

const cinMoviesRouter = express.Router();

cinMoviesRouter.get("/", getCinema_movie);
cinMoviesRouter.get("/search", findCinema_movieByName);
cinMoviesRouter.get("/:id", findCinema_movieById);
cinMoviesRouter.post("/", newCinMovieValidators, addCinema_movie);

export default cinMoviesRouter;
