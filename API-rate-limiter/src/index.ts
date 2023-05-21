import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./app/routers";
import { isAuth } from "./app/middlewares/protected";
// import manyRequestsFromSameWindowLimiter from "./app/middlewares/manyRequestsFromSameWindowLimiter";
// import globalRateLimiter from "./app/middlewares/globalRateLimiter";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.json());
app.use(cors());
app.use(isAuth);
app.use(router);
app.use(morgan("dev"));

app.listen({ port: PORT }, () =>
  process.stdout.write(`http://localhost:${PORT} \n`)
);
