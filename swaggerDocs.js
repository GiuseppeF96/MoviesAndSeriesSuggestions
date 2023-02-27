const swaggerDocs = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Series And Movies Recommendation API",
    description: "Series And Movies Recommendation API Information",
    contact: {
      name: "API Support",
      url: "https://moodle.dhbw.de/mod/forum/discuss.php?d=28276",
    },
    license: {
      name: "DHBW Karlsruhe Standart License",
      url: "https://moodle.dhbw.de/mod/forum/discuss.php?d=28276",
    },
  },
  host: "localhost:4000",
  basePath: "/",
  tags: [
    {
      name: "Routes",
      description: "API routes",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/series": {
      get: {
        tags: ["Series"],
        summary: "Get all series in database",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Series",
            },
          },
        },
      },
      post: {
        tags: ["Series"],
        summary: "Add a new series to the database",
        parameters: [
          {
            name: "Series",
            in: "body",
            description: "Series to add to the database",
            schema: {
              $ref: "#/definitions/Series",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Series",
            },
          },
        },
      },
    },
    "/series/search": {
      get: {
        tags: ["Series"],
        summary: "Get series by name",
        parameters: [
          {
            name: "name",
            in: "query",
            description: "Name of the series",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Series",
            },
          },
        },
      },
    },
    "/series/{id}": {
      get: {
        tags: ["Series"],
        summary: "Get series by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the series",
            required: true,
            type: "string",
          },
        ],

        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Series",
            },
          },
        },
      },
    },
  },

  definitions: {
    Series: {
      required: ["name", "genre", "seasons", "episodes"],
      properties: {
        name: {
          type: "string",
          description: "Name of the series",
        },
        genre: {
          type: "string",
          description: "Genre of the series",
        },
        seasons: {
          type: "number",
          description: "Number of seasons of the series",
        },
        episodes: {
          type: "number",
          description: "Number of episodes of the series",
        },
      },
    },
  },
};
export default swaggerDocs;
