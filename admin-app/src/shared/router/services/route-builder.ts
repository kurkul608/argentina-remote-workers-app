import { Routes } from "../index";
import { Pathname } from "react-router-dom";

export const routeBuilder = (routes: Array<Routes>): Pathname => {
	return routes.reduce((acc, route) => `${acc}/${route}`, "");
};
