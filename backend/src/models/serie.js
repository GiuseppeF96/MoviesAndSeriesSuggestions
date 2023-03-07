import mongoose from "mongoose";
// set up a mongoose model
const serieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  seasons: { type: Number, required: true },
  episodes: { type: Number, required: true },
});

export const Serie = mongoose.model("Serie", serieSchema);
