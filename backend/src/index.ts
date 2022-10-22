import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const start = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      app.get("/", (req: Request, res: Response) => {
        res.send("Expense app Server");
      });

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
