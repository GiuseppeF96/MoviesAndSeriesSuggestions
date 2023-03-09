import { check, validationResult } from "express-validator";
import { Cinema } from "../models/cinemaMovie.js";
// Get all Cinema from the database
export const getCinemaMovie = async (req, res) => {
  const cinemaMovies = await Cinema.find();
  res.status(200).send(cinemaMovies);
};
// Find a cinemaMovie by name
export const findCinemaMovieByName = async (req, res) => {
  let result = await Cinema.find({ name: req.query.name });
  res.status(200).send(result);
};
// Find a cinemaMovie by id
export const findCinemaMovieById = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(404).send({ message: "ID is too short" });
  }
  if (!Cinema.findById(req.params.id)) {
    res.status(404).send({ message: "Cinema not found" });
  } else {
    let result = await Cinema.findById(req.params.id);
    res.status(200).send(result);
  }
};
// Add a new cinemaMovie to the database (with validation)
export const addCinemaMovie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const cinemaMovie = new Cinema({
    name: req.body.name,
    genre: req.body.genre,
    duration: req.body.duration,
    mainActor: req.body.mainActor,
  });
  cinemaMovie
    .save(cinemaMovie)
    .then((cinemaMovie) => res.status(201).send(cinemaMovie));
};

//delete a cinemaMovie
export const deleteCinemaMovie = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID is too short" });
  } else if (!Cinema.findById(req.params.id)) {
    res.status(404).send({ message: "Cinema not found" });
  } else {
    let result = await Cinema.findByIdAndDelete(req.params.id);
    res.status(200).send(result);
  }
};

//Patch a cinemaMovie
export const patchCinemaMovie = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID has the wrong length" });
  } else if (!Cinema.findById(req.params.id)) {
    res.status(404).send({ message: "Cinema not found" });
  } else {
    let result = await Cinema.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    });
    res.status(200).send(result);
  }
};

// get random cinemaMovie
export const getRandomCinemaMovie = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const count = await Cinema.countDocuments();
    if (count === 0) {
      // Status 200 to avoid error in frontend
      res.status(200).send({
        _id: "No movie found",
        name: "No movie found",
        genre: "No movie found",
        duration: "No movie found",
        mainActor: "No movie found",
        __v: 0,
      });
    } else {
      const randomIndex = Math.floor(Math.random() * count);
      const randomCinema = await Cinema.findOne().skip(randomIndex);
      res.status(200).send(randomCinema);
    }
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
