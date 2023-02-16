import { check, validationResult } from "express-validator";
const series = [
    {
        id: 1,
        name: 'The Walking Dead',
        genre: 'Horror',
        seasons: 10,
        episodes: 180,
    },
    {
        id: 2,
        name: 'Breaking Bad',
        genre: 'Drama',
        seasons: 5,
        episodes: 62,
    },
    {
        id: 3,
        name: 'Game of Thrones',
        genre: 'Fantasy',
        seasons: 8,
        episodes: 73,
    },
];

export const getSeries = (req, res) => {
    res.status(200).send(series);
};

export const findSeries = (req, res) => {
    let result = series.filter((serie) => serie.name == req.query.name);
    res.status(200).send(result);
};

export const findSeriesById = (req, res) => {
    let result = series.filter((serie) => serie.id == req.params.id);
    res.status(200).send(result);
};

export const addSerie = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let serie = req.body;
    series.push(serie);
    res.status(201).send(`Added ${serie.title} to series collection`);
  };

// attached as second param in a route
export const newSerieValidators = [
    check("name").notEmpty().withMessage("Name field required"),
    check("genre").notEmpty().withMessage("Genre field required"),
  ];