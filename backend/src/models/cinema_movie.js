import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  length: { type: Number, required: true },
  mainActor: { type: String, required: true },
});

export const Cinema = mongoose.model("Cinema Movie", cinemaSchema);