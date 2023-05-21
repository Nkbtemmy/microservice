import express from "express";
import EmailController from "../controllers/emailController";
import { protectedRoute } from "../middlewares/protected";
import checkUserLimits from "../middlewares/rateLimitRoutes";
// import manyRequestsFromSameWindowLimiter from "../middlewares/manyRequestsFromSameWindowLimiter";
// import globalRateLimiter from "../middlewares/globalRateLimiter";

const router = express();

router.post(
  "/send",
  protectedRoute,
  checkUserLimits,
  EmailController.sendEmail
);

// router.post(
//   "/send",
//   protectedRoute,
//   globalRateLimiter,
//   EmailController.sendEmail
// );

export default router;
