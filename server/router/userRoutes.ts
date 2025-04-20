import express from "express";
const userRoutes = express.Router();
import { registerUser } from "../controller/userController";
userRoutes.post("/", registerUser);
export default userRoutes;
