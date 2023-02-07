import { createSearchParams, URLSearchParamsInit } from "react-router-dom";

interface IOwnProps {
	[x: string]: any;
}

export const searchParamsBuilder = (data: IOwnProps): string => {
	const obj: URLSearchParamsInit = {};
	for (const [key, value] of Object.entries(data)) {
		obj[key] = value.toString();
	}
	return createSearchParams(obj).toString();
};
