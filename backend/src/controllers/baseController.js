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
            url: "/cinema-movies/:id",
          },
          {
            name: "Add cinema movie",
            description: "Add cinema movie",
            method: "POST",
            url: "/cinema-movies",
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
            url: "/series/:id",
          },
          {
            name: "Add series",
            description: "Add series",
            method: "POST",
            url: "/series",
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
            url: "/classics/:id",
          },
          {
            name: "Add classic movie",
            description: "Add classic movie",
            method: "POST",
            url: "/classics",
          },
        ],
      },
    ],
  });
};
