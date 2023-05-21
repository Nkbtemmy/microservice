import express from "express";
import UserControllers from "../controllers/userController";
import { protectedRoute } from "../middlewares/protected";

const router = express();

router.get("/", protectedRoute, UserControllers.getAllUsers);
router.post("/", UserControllers.signup);
router.post("/login", UserControllers.login);

export default router;
