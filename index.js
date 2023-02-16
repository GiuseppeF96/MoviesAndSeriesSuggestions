import express from "express";
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
