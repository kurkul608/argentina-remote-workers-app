export interface ISearchParams {
	[x: string]: string | boolean;
}

export const searchParamsGrabber = (queryString: string) => {
	const obj: ISearchParams = {};
	queryString
		.slice(queryString.indexOf("?") + 1)
		.split("&")
		.map((item) => {
			const [param, value] = item.split("=");
			if (value === "true") {
				return (obj[param] = true);
			}
			if (value === "false") {
				return (obj[param] = false);
			}
			return (obj[param] = value);
		});
	return obj;
};
