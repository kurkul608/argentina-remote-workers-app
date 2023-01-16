import { Routes } from "../index";

export const routeExactMatch = (fullRoute: string, route: Routes): boolean => {
  const routes: Routes[] = fullRoute.split("/") as Routes[];
  return routes[routes.length - 1].includes(route);
};
