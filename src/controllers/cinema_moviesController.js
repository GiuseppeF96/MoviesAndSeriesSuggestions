import { check, validationResult } from "express-validator";
import { Cinema } from "../models/cinema_movie.js";

export const getCinema_movie = async (req, res) => {
  const cinema_movies = await Cinema.find();
  res.status(200).send(cinema_movies);
};

export const findCinema_movieByName = async (req, res) => {
  let result = await Cinema.find({ name: req.query.name });
  res.status(200).send(result);
};

export const findCinema_movieById = async (req, res) => {
  let result = await Cinema.findById(req.params.id);
  res.status(200).send(result);
};

export const addCinema_movie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const cinema_movie = new Cinema({
    name: req.body.name,
    genre: req.body.genre,
    publishing: req.body.publishing,
    length: req.body.length,
    director: req.body.director,
  });
  cinema_movie
    .save(cinema_movie)
    .then((cinema_movie) => res.status(201).send(cinema_movie));
};

// attached as second param in a route
export const newCinMovieValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("director").notEmpty().withMessage("Director field required"),
];
