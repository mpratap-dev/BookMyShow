import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    enum: ["action", "comedy", "drama", "horror", "sci-fi"],
    required: true,
    default: "action"
  },
  language: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
});

const MovieModel = mongoose.model("Movie", movieSchema);
export default MovieModel;