import React from "react";
import { TableProps } from "shared/components/table-widget/index";

export const TextTable = ({ content }: Pick<TableProps, "content">) => {
	return (
		<div>{content && content.map((item) => <div key={item}>{item}</div>)}</div>
	);
};
