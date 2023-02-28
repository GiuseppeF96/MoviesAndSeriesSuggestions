import express from "express";
import bodyParser from "body-parser";
import seriesRoutes from "./routers/seriesRoutes.js";
import classicRoutes from "./routers/classicRoutes.js";
import cinemaRoutes from "./routers/cinema_moviesRoutes.js";
import baseRoutes from "./routers/base_routes.js";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import swaggerDocs from "../swaggerDocs.js";
const app = express();

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Connected to MongoDB");
});

const port = 4000;

app.use(bodyParser.json());
app.use("/", baseRoutes);
app.use("/series", seriesRoutes);
app.use("/classics", classicRoutes);
app.use("/cinema-movies", cinemaRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
