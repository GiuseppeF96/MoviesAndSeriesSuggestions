import mongoose from "mongoose";
// set up a mongoose model
const classicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  publishingYear: { type: Number, required: true },
  duration: { type: Number, required: true },
  director: { type: String, required: true },
});

export const Classic = mongoose.model("Classic", classicSchema);
