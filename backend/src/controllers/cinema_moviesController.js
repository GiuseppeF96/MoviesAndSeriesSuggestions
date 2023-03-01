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
    duration: req.body.duration,
    mainActor: req.body.mainActor,
  });
  cinema_movie
    .save(cinema_movie)
    .then((cinema_movie) => res.status(201).send(cinema_movie));
};

//delete a cinema_movie
export const deleteCinema_movie = async (req, res) => {
  let result = await Cinema.findByIdAndDelete(req.params.id);
  res.status(200).send(result);
};

//Patch a cinema_movie
export const patchCinema_movie = async (req, res) => {
  let result = await Cinema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).send(result);
};

// get random cinema_movie
export const getRandomCinema_movie = async (req, res) => {
  try {
    const count = await Cinema.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomCinema = await Cinema.findOne().skip(randomIndex);
    res.status(200).send(randomCinema);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// attached as second param in a route
export const newCinMovieValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("mainActor").notEmpty().withMessage("mainActor field required"),
];
