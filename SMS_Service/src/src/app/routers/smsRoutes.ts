import express from "express";
import Smscontrollers from "../controllers/smsControllers";
import { protectedRoute } from "../middlewares/protected";
import checkUserLimits from "../middlewares/rateLimitRoutes";
// import manyRequestsFromSameWindowLimiter from "../middlewares/manyRequestsFromSameWindowLimiter";
// import globalRateLimiter from "../middlewares/globalRateLimiter";

const router = express();

router.post(
  "/telesignal",
  protectedRoute,
  checkUserLimits,
  Smscontrollers.telesignal
);
router.post("/venage", protectedRoute, checkUserLimits, Smscontrollers.venage);
// router.post(
//   "/telesignal",
//   protectedRoute,
//   manyRequestsFromSameWindowLimiter,
//   Smscontrollers.telesignal
// );
// router.post("/venage", protectedRoute, manyRequestsFromSameWindowLimiter, Smscontrollers.venage);

export default router;
