import express from "express";
import { addUser, getAllUsers, getUserById, login } from "../controllers/users.js";
import { checkAdminRole, verifyIfSameUser, verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", verifyToken, checkAdminRole, getAllUsers);
router.get("/:id", verifyToken, verifyIfSameUser, getUserById);
router.post("/", addUser);
router.post("/login", login);

export default router;
