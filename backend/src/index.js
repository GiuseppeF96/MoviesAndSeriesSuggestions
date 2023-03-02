import express from "express";
import bodyParser from "body-parser";
import seriesRoutes from "./routers/seriesRoutes.js";
import classicRoutes from "./routers/classicRoutes.js";
import cinemaRoutes from "./routers/cinemaMoviesRoutes.js";
import baseRoutes from "./routers/baseRoutes.js";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import swaggerDocs from "../swaggerDocs.js";
const app = express();
const port = 4000;
// configure Express to use body-parser as middle-ware.
app.use(bodyParser.json());

// Setting valid routes for the API and the Swagger UI
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/", baseRoutes);
app.use("/series", seriesRoutes);
app.use("/classics", classicRoutes);
app.use("/cinema-movies", cinemaRoutes);
// Invalid routes will return a 404 error
app.all("*", (req, res) => res.sendStatus(404));

// connect to the Mongo Database
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Connected to MongoDB");
});

// start the Express server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
