import mongoose from "mongoose";

const cinemaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  publishing: { type: Number, required: true },
  length: { type: Number, required: true },
  director: { type: String, required: true },
});

export const Cinema = mongoose.model("Cinema Movie", cinemaSchema);