import { check, validationResult } from "express-validator";
import { Classic } from "../models/classic.js";
// Get all Classic from the database
export const getClassic = async (req, res) => {
  const classic = await Classic.find();

  res.status(200).send(classic);
};
// Find a classic by name
export const findClassicByName = async (req, res) => {
  if (req.query.name === undefined) {
    res.status(400).send({ message: "No name was provided" });
  } else {
    let result = await Classic.find({ name: req.query.name });
    if (result.length === 0) {
      res.status(404).send({ message: "Classic Movie not found" });
    } else {
      res.status(200).send(result);
    }
  }
};
// Find a classic by id
export const findClassicById = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID has the wrong length" });
  } else {
    try {
      let result = await Classic.findById(req.params.id);

      res.status(200).send(result);
    } catch (err) {
      res.status(404).send({ message: "Classic Movie not found" });
    }
  }
};
// Add a new classic to the database (with validation)
export const addClassic = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const classic = new Classic({
    name: req.body.name,
    genre: req.body.genre,
    publishingYear: req.body.publishingYear,
    duration: req.body.duration,
    director: req.body.director,
  });
  classic.save(classic).then((classic) => res.status(201).send(classic));
};

//delete a classic
export const deleteClassic = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID has the wrong length" });
  } else {
    try {
      let result = await Classic.findByIdAndDelete(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(404).send({ message: "Classic Movie not found" });
    }
  }
};

//Patch a classic
export const patchClassic = async (req, res) => {
  if (req.params.id.length !== 24) {
    res.status(400).send({ message: "ID has the wrong length" });
  } else {
    try {
      let result = await Classic.findByIdAndUpdate(req.params.id, req.body, {
        new: false,
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(404).send({ message: "Classic Movie not found" });
    }
  }
};

// get random classic movie
export const getRandomClassic = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const count = await Classic.countDocuments();
    if (count === 0) {
      res.status(404).send({
        _id: "No classic found",
        name: "No classic found",
        genre: "No classic found",
        publishingYear: "No classic found",
        duration: "No classic found",
        director: "No classic found",
        _v: "No classic found",
      });
    } else {
      const randomIndex = Math.floor(Math.random() * count);
      const randomClassic = await Classic.findOne().skip(randomIndex);
      res.status(200).send(randomClassic);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// attached as second param in a route
export const newClassicValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("director").notEmpty().withMessage("Director field required"),
  check("publishingYear")
    .notEmpty()
    .withMessage("Publishing year field required"),
  check("duration").notEmpty().withMessage("Duration field required"),
];
