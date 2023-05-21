import express from "express";
import SubscriptionControllers from "../controllers/subscriptionControllers";
import { protectedRoute } from "../middlewares/protected";

const router = express();

router.post("/", SubscriptionControllers.create);
router.get("/", SubscriptionControllers.getAll);
router.get("/:id", SubscriptionControllers.getOne);
router.put("/:id", protectedRoute, SubscriptionControllers.update);
router.delete("/:id", protectedRoute, SubscriptionControllers.delete);

export default router;
