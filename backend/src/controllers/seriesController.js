import { check, validationResult } from "express-validator";
import { Serie } from "../models/serie.js";

export const getSeries = async (req, res) => {
  const series = await Serie.find();
  res.status(200).send(series);
};

export const findSeriesByName = async (req, res) => {
  let result = await Serie.find({ name: req.query.name });
  res.status(200).send(result);
};

export const findSeriesById = async (req, res) => {
  let result = await Serie.findById(req.params.id);
  res.status(200).send(result);
};

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

//delete a serie
export const deleteSerie = async (req, res) => {
  let result = await Serie.findByIdAndDelete(req.params.id);
  res.status(200).send(result);
};

//Patch a serie by id and validate the body
export const patchSerie = async (req, res) => {
  let result = await Serie.findByIdAndUpdate(req.params.id, req.body, {
    new: false,
  });
  res.status(200).send(result);
};

export const getRandomSerie = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  try {
    const count = await Serie.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomSerie = await Serie.findOne().skip(randomIndex);
    res.status(200).send(randomSerie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// attached as second param in a route
export const newSerieValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
];
