import { check, validationResult } from "express-validator";
import { Classic } from "../models/classic.js";

export const getClassic = async (req, res) => {
  const classic = await Classic.find();
  res.status(200).send(classic);
};

export const findClassicByName = async (req, res) => {
  let result = await Classic.filter({ name: req.query.name });
  res.status(200).send(result);
};

export const findClassicById = async (req, res) => {
  let result = await Classic.filter(req.params.id);
  res.status(200).send(result);
};

export const addClassic = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const classic = new Classic({
    name: req.body.name,
    genre: req.body.genre,
    publishingYear: req.body.publishingYear,
    length: req.body.length,
    director: req.body.director,
  });
  classic.save(classic).then((classic) => res.status(201).send(classic));
};

// attached as second param in a route
export const newClassicValidators = [
  check("name").notEmpty().withMessage("Name field required"),
  check("genre").notEmpty().withMessage("Genre field required"),
  check("director").notEmpty().withMessage("Director field required"),
];
