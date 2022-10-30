import express from "express";
import { chatRouter } from "./chatRoute";
import { messageRouter } from "./message";
export const router = express.Router();

const defaultRoutes = [
  {
    path: "/chat",
    route: chatRouter,
  },
  {
    path: "/message",
    route: messageRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
