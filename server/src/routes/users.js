import express from "express";
import { addUser, getAllUsers, getUserById, login } from "../controllers/users.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.post("/login", login);

export default router;
