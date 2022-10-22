import express from "express";
import { chatRouter } from "./chatRoute";

export const router = express.Router();

const defaultRoutes = [
  {
    path: "/chat",
    route: chatRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
