import express from "express";
import bodyParser from "body-parser";
import seriesRoutes from "./routers/seriesRoutes.js";
const app = express();

const port = 4000;

// app uses json
app.use(bodyParser.json());
app.use("/series", seriesRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
