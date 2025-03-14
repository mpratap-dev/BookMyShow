import express from "express";
import { addMovie, getAllMovies } from "../controllers/movies.js";

const movieRouter = express.Router();

movieRouter.post("/", addMovie);
movieRouter.get("/", getAllMovies);

export default movieRouter;
