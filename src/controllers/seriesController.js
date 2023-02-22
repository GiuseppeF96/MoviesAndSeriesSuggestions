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

// attached as second param in a route
export const newSerieValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
];
