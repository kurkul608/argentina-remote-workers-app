import { Routes } from "../index";
import { Pathname } from "react-router-dom";

// export const routeBuilder = (routes: Array<Routes>): Pathname => {
// 	return routes.reduce((acc, route) => `${acc}/${route}`, "");
// };

export const routeBuilder = (routes: Routes | Array<Routes>): Pathname => {
	const isArray = Array.isArray(routes);
	const url = isArray ? routes.join("/") : routes;

	return `/${url}`;
};

export const routeBuilderWithReplace = (
	routes: Routes | Array<Routes>,
	key: string,
	value: string | number
): Pathname => {
	const url = routeBuilder(routes);

	return url.replace(`:${key}`, value.toString());
};
