import { Pathname } from "react-router-dom";

export const RouteReplacer = (
	route: Pathname,
	key: string,
	value: string | number
): Pathname => {
	return route.replace(`:${key}`, value.toString());
};
