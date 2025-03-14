import MovieModel from "../models/movies.js";

export const addMovie = async (req, res) => {
  try {
    const movie = await MovieModel.create(req.body);
    res.status(201).json({
      success: true,
      data: movie,
      token,
      message: "Login successful"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find({});
    res.status(200).json({
      movies,
      success: true
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false
    });
  }
}
