import express from "express";
import { addMovie, deleteMovie, getAllMovies, updateMovie } from "../controllers/movies.js";
import { checkAdminRole, verifyToken } from "../middlewares/auth.js";

const movieRouter = express.Router();

movieRouter.post("/", verifyToken, checkAdminRole, addMovie);
movieRouter.get("/", verifyToken, checkAdminRole, getAllMovies);
movieRouter.delete("/:id", verifyToken, checkAdminRole, deleteMovie);
movieRouter.patch("/:id", verifyToken, checkAdminRole, updateMovie);

export default movieRouter;
