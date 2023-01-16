import { Routes } from "../index";

export const routeBuilder = (routes: Array<Routes>): string => {
  return routes.reduce((acc, route) => `${acc}/${route}`, "");
};
