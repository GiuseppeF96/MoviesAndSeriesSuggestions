import { check, validationResult } from "express-validator";
const cinema_movies = [
    {
        id: 1,
        name: "Ant-Man and the Wasp: Quantumania",
        genre: "Action",
        publishing: 2023,
        length: 125,
        director: "Peyton Reed",
    },
    {
        id: 2,
        name: "Avatar: The Way of Water",
        genre: "Sci-Fi",
        publishing: 2022,
        length: 195,
        director: "James Cameron",
        
    },
    {
        id: 3,
        name: "Der Geschmack der kleinen Dinge",
        genre: "Comedy",
        publishing: 2023,
        length: 114,
        director: "Slony Sow",
    },
];

export const getCinema_movie = (req, res) => {
    res.status(200).send(cinema_movies);
};

export const findCinema_movie = (req, res) => {

  let result = cinema_movies.filter(
    (cinema_movie) => cinema_movies.name == req.query.name
  );
  res.status(200).send(result);

};

export const findCinema_movieById = (req, res) => {
    let result = cinema_movies.filter((s) => serie.id == req.params.id);
    res.status(200).send(result);
};

export const addCinema_movie = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let cinema_movie = req.body;
    cinema_movies.push(cinema_movie);
    res.status(201).send(`Added ${cinema_movie.title} to cinema movie collection`);
  };

// attached as second param in a route
export const newSerieValidators = [
    check("name").notEmpty().withMessage("Name field required"),
    check("genre").notEmpty().withMessage("Genre field required"),
    check("publishing").notEmpty().withMessage("Publishing field required"),
    check("length").notEmpty().withMessage("Length field required"),
    check("director").notEmpty().withMessage("Director field required"),
  ];
