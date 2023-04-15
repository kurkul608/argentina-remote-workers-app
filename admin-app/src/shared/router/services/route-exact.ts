import { Routes } from "../index";
import { Pathname } from "react-router-dom";

export const routeExactMatch = (
	fullRoute: Pathname,
	route: Routes,
	depth = 1
): boolean => {
	const routes: Routes[] = fullRoute.split("/") as Routes[];
	const splitRoute = route.split("/");
	return routes[routes.length - depth].includes(
		splitRoute[splitRoute.length - depth]
	);
};
