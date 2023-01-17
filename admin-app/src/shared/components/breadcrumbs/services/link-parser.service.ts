export function LinkParserService(link: string) {
	let navTo = "";
	console.log(link);
	return link
		.slice(1, link.length)
		.split("/")
		.map((value) => {
			navTo += "/" + value;
			return navTo;
		});
}
