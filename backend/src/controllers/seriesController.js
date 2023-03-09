import { check, validationResult } from "express-validator";
import { Serie } from "../models/serie.js";
// Get all series from the database
export const getSeries = async (req, res) => {
  const series = await Serie.find();
  res.status(200).send(series);
};
// Find a serie by name
export const findSeriesByName = async (req, res) => {
  if (req.query.name === undefined) {
    res.status(400).send({ message: "No name was provided" });
  } else {
    let result = await Serie.find({ name: req.query.name });
    if (result.length === 0) {
      res.status(404).send({ message: "Serie not found" });
    } else {
      res.status(200).send(result);
    }
  }
};
// Find a serie by id
export const findSeriesById = async (req, res) => {
  // Check if the id is valid
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID has the wrong length" });
  } else {
    try {
      let result = await Serie.findById(req.params.id);

      res.status(200).send(result);
    } catch (err) {
      res.status(404).send({ message: "Serie not found" });
    }
  }
};

// Add a new serie to the database (with validation)
export const addSerie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const serie = new Serie({
    name: req.body.name,
    genre: req.body.genre,
    seasons: req.body.seasons,
    episodes: req.body.episodes,
  });
  serie.save(serie).then((serie) => res.status(201).send(serie));
};

// Delete a serie by id
export const deleteSerie = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID has the wrong length" });
  } else {
    try {
      let result = await Serie.findByIdAndDelete(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(404).send({ message: "Serie not found" });
    }
  }
};

//Patch a serie by id
export const patchSerie = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID has the wrong length" });
  } else {
    try {
      let result = await Serie.findByIdAndUpdate(req.params.id, req.body, {
        new: false,
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(404).send({ message: "Serie not found" });
    }
  }
};
// Get a random serie from the database
export const getRandomSerie = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    // Get the count of all entries in the DB and then get a random entry
    const count = await Serie.countDocuments();
    if (count === 0) {
      //status 200 to fill frontend with "no series found"
      res.status(200).send({
        _id: "No series found",
        name: "No series found",
        genre: "No series found",
        seasons: "No series found",
        episodes: "No series found",
        __v: 0,
      });
    } else {
      const randomIndex = Math.floor(Math.random() * count);
      const randomSerie = await Serie.findOne().skip(randomIndex);
      res.status(200).send(randomSerie);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Attached as second param in a route to validate the request body
export const newSerieValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("seasons").notEmpty().withMessage("Seasons field required"),
  check("episodes").notEmpty().withMessage("Episodes field required"),
];
