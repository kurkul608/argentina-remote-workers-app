import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { mainBotStart } from "./bots/main-bot";
import { router } from "./routes/v1";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use("/v1", router);

const start = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);

      mainBotStart();

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
