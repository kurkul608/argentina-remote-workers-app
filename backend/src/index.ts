import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { mainBotStart } from "./bots/main-bot";
import { router } from "./db/routes/v1";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Argentina remote app api doc",
      version: "1.0.0",
    },
    servers: [
      {
        url: "localhost:5050",
      },
    ],
  },
  apis: [
    "./src/db/routes/v1/chatRoute/*.ts",
    "./src/db/routes/v1/message/*.ts",
  ],
};

const openapiSpecification = swaggerJsdoc(options);

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/v1", router);

const start = async () => {
  dotenv.config();
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);

      mainBotStart();

      if (process.env.DEVELOP) {
        app.use("/api-docs", swaggerUi.serve);
        app.get("/api-docs", swaggerUi.setup(openapiSpecification));
      }

      app.listen(port, () => {
        console.log(
          `⚡️[server]: Server is running at http://localhost:${port}`
        );
      });
    } else {
      return new Error("No mongo uri");
    }
  } catch (e: any) {
    console.log("Server error", e.message);
    process.exit(1);
  }
};

start();
