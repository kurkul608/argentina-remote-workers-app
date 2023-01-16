import { Routes } from "../index";
import { Pathname } from "react-router-dom";

export const routeExactMatch = (
	fullRoute: Pathname,
	route: Routes
): boolean => {
	const routes: Routes[] = fullRoute.split("/") as Routes[];
	return routes[routes.length - 1].includes(route);
};
