import express from "express";
import { addMovie, deleteMovie, getAllMovies, updateMovie } from "../controllers/movies.js";
import { checkValidRole, verifyToken } from "../middlewares/auth.js";
import { ROLES } from "../constants/auth.js";

const movieRouter = express.Router();

movieRouter.post("/", verifyToken, checkValidRole([ROLES.ADMIN]), addMovie);
movieRouter.get("/", verifyToken, checkValidRole([ROLES.ADMIN]), getAllMovies);
movieRouter.delete("/:id", verifyToken, checkValidRole([ROLES.ADMIN]), deleteMovie);
movieRouter.put("/:id", verifyToken, checkValidRole([ROLES.ADMIN]), updateMovie);

export default movieRouter;
