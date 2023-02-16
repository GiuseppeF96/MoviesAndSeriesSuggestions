import { check, validationResult } from "express-validator";
const classic = [
    {
        id: 1,
        name: "Psycho",
        genre: "Horror",
        publishing year: 1960,
        length: 109,
	  director: "Alfred Hitchcock",
    },
    {
        id: 2,
        name: "The Good, the Bad and the Ugly",
        genre: "Western",
        publishing year: 1966,
        length: 161,
	  director: "Sergio Leone",
    },
    {
        id: 3,
        name: "Balde Runner",
        genre: "Sci-Fi",
        publishing year: 1982,
        length: 118,
	  director: "Ridley Scott",
    },
];

export const getClassic = (req, res) => {
    res.status(200).send(classic);
};

export const findClassic = (req, res) => {
    let result = classic.filter((classic) => classic.name == req.query.classic);
    res.status(200).send(result);
};

export const findClassicById = (req, res) => {
    let result = classic.filter((classic) => classic.id == req.params.id);
    res.status(200).send(result);
};

export const addClassic = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let classic = req.body;
    classic.push(classic);
    res.status(201).send(`Added ${classic.name} to classic collection`);
  };

// attached as second param in a route
export const newCalssicValidators = [
    check("name").notEmpty().withMessage("Name field required"),
    check("genre").notEmpty().withMessage("Genre field required"),
    check("director").notEmpty().withMessage("Director field required"),
  ];


