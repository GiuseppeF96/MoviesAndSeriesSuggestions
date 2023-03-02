export const getRoutesInfo = async (req, res) => {
  res.status(200).send({
    routes: [
      {
        name: "Cinema Movies",
        description: "Cinema Movies API",
        routes: [
          {
            name: "Get all cinema movies",
            description: "Get all cinema movies",
            method: "GET",
            url: "/cinema-movies",
          },
          {
            name: "Get cinema movie by name",
            description: "Get cinema movie by name",
            method: "GET",
            url: "/cinema-movies/search",
          },
          {
            name: "Get cinema movie by id",
            description: "Get cinema movie by id",
            method: "GET",
            url: "/cinema-movies/id/:id",
          },
          {
            name: "Add cinema movie",
            description: "Add cinema movie",
            method: "POST",
            url: "/cinema-movies",
          },
          {
            name: "Delete cinema movie",
            description: "Delete cinema movie",
            method: "DELETE",
            url: "/cinema-movies/id/:id",
          },
          {
            name: "Patch cinema movie",
            description: "Patch cinema movie",
            method: "PATCH",
            url: "/cinema-movies/id/:id",
          },
          {
            name: "Get random cinema movie",
            description: "Get random cinema movie",
            method: "GET",
            url: "/cinema-movies/randomizer",
          },
        ],
      },
      {
        name: "Series",
        description: "Series API",
        routes: [
          {
            name: "Get all series",
            description: "Get all series",
            method: "GET",

            url: "/series",
          },
          {
            name: "Get series by name",
            description: "Get series by name",
            method: "GET",
            url: "/series/search",
          },
          {
            name: "Get series by id",
            description: "Get series by id",
            method: "GET",
            url: "/series/id/:id",
          },
          {
            name: "Add series",
            description: "Add series",
            method: "POST",
            url: "/series",
          },
          {
            name: "Delete series",
            description: "Delete series",
            method: "DELETE",
            url: "/series/id/:id",
          },
          {
            name: "Patch series",
            description: "Patch series",
            method: "PATCH",
            url: "/series/id/:id",
          },
          {
            name: "Get random series",
            description: "Get random series",
            method: "GET",
            url: "/series/randomizer",
          },
        ],
      },
      {
        name: "Classic Movies",
        description: "Classic Movies API",
        routes: [
          {
            name: "Get all classic movies",
            description: "Get all classic movies",
            method: "GET",
            url: "/classics",
          },
          {
            name: "Get classic movie by name",
            description: "Get classic movie by name",
            method: "GET",
            url: "/classics/search",
          },
          {
            name: "Get classic movie by id",
            description: "Get classic movie by id",
            method: "GET",
            url: "/classics/id/:id",
          },
          {
            name: "Add classic movie",
            description: "Add classic movie",
            method: "POST",
            url: "/classics",
          },
          {
            name: "Delete classic movie",
            description: "Delete classic movie",
            method: "DELETE",
            url: "/classics/id/:id",
          },
          {
            name: "Patch classic movie",
            description: "Patch classic movie",
            method: "PATCH",
            url: "/classics/id/:id",
          },
          {
            name: "Get random classic movie",
            description: "Get random classic movie",
            method: "GET",
            url: "/classics/randomizer",
          },
        ],
      },
    ],
  });
};
