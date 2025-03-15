import MovieModel from "../models/movies.js";

export const addMovie = async (req, res) => {
  try {
    const movie = await MovieModel.create(req.body);
    res.status(201).json({
      success: true,
      data: movie,
      message: "Movie added successfully"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const deleteMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findByIdAndDelete(req.params.id);
    
    res.status(200).json({
      success: true,
      data: movie,
      message: "Movie deleted successfully"
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

export const updateMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: movie,
      message: "Movie updated successfully"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
