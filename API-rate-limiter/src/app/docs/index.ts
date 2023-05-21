import dotenv from "dotenv";
import os from "os";
import swaggerDoc from "./swagger.json";
import sms from "./SMS";
import email from "./Email";
import subscriptions from "./Subscriptions";
import user from "./User";

const defaults = swaggerDoc.paths;

dotenv.config();

const paths = {
  ...defaults,
  ...subscriptions,
  ...user,
  ...sms,
  ...email,
};

const config = {
  swagger: "2.0",
  info: {
    version: "1.0.0.",
    title: "API Rate Limiter Documentation",
    description: "",
  },
  servers: [
    {
      url: "http://localhost:8005",
      name: `${os.hostname()}`,
    },
    {
      url: `https://${process.env.HOST}`,
      name: `${os.hostname()}`,
    },
  ],
  basePath: `/api`,
  schemes: ["http", "https"],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description: "Enter token like `Bear <Token>` ",
    },
  },
  tags: [
    {
      name: "API Rate Limiter Documentation",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths,
};
export default config;
