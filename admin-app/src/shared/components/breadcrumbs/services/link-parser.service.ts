export function LinkParserService(link: string) {
	let navTo = "";
	return link
		.slice(1, link.length)
		.split("/")
		.map((value) => {
			navTo += "/" + value;
			return navTo;
		});
}
