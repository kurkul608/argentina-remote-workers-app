import { ISearchParams } from "shared/router/services/search-params-grabber";

export const searchParamsFinder = (
	paramsObj: ISearchParams,
	params: string[] | string
) => {
	const obj: ISearchParams = {};
	if (typeof params === "string") {
		return paramsObj[params];
	}
	params.map((item) => {
		obj[item] = paramsObj[item];
	});
	return obj;
};
