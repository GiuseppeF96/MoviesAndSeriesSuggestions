import mongoose from "mongoose";
// set up a mongoose model
const cinemaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true },
  mainActor: { type: String, required: true },
});

export const Cinema = mongoose.model("Cinema-Movie", cinemaSchema);
