import express from "express";
import { checkValidRole, verifyToken } from "../middlewares/auth.js";
import { addTheater, approveTheater, deleteTheater, getAllTheaters, rejectTheater, updateTheater } from "../controllers/theaters.js";
import { ROLES } from "../constants/auth.js";

const theatersRouter = express.Router();

theatersRouter.post("/", verifyToken, checkValidRole([ROLES.ADMIN, ROLES.PARTNER]), addTheater);
theatersRouter.get("/", verifyToken, checkValidRole([ROLES.ADMIN, ROLES.PARTNER]), getAllTheaters);
theatersRouter.delete("/:id", verifyToken, checkValidRole([ROLES.PARTNER]), deleteTheater);
theatersRouter.put("/:id", verifyToken, checkValidRole([ROLES.PARTNER]), updateTheater);
theatersRouter.patch("/approve/:id", verifyToken, checkValidRole([ROLES.ADMIN]), approveTheater);
theatersRouter.patch("/reject/:id", verifyToken, checkValidRole([ROLES.ADMIN]), rejectTheater);


export default theatersRouter;
