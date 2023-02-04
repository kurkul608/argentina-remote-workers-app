import { Pathname } from "react-router-dom";

export const routeReplacer = (
	route: Pathname,
	key: string,
	value: string | number
): Pathname => {
	return route.replace(`:${key}`, value.toString());
};
