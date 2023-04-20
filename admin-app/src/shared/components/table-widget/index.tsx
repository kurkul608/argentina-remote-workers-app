import React, { useState } from "react";
import { Widget } from "shared/widget";
import { ChipsTable } from "shared/components/table-widget/components/chips-table";
import { TextTable } from "shared/components/table-widget/components/text-table";
import { RegularTable } from "shared/components/table-widget/components/regular-table";
import {
	Description,
	StyledTable,
} from "shared/components/table-widget/styled";

export enum TableStyles {
	chips = "chips",
	text = "text",
	table = "table",
}

export interface TableProps {
	style: TableStyles;
	content?: string[];
}

export interface ITableWidgetProps {
	title: string;
	description?: string;
	content?: string[];
	isEditable?: boolean;
	handleOnDelete?: () => any;
	handleOnCreate?: () => any;
	handleOnUpdate?: () => any;
}

export const TableWidget = ({
	title,
	description,
	content,
}: ITableWidgetProps) => {
	const [style, setStyle] = useState(TableStyles.table);
	const handleOnClick = (style: TableStyles) => {
		setStyle(style);
	};
	const keys = Object.entries(TableStyles);
	return (
		<StyledTable>
			<Widget name={title}>
				<Description>{description}</Description>
				{keys.map(([key, value]) => (
					<button
						style={{ width: 20, height: 50 }}
						key={`button-style-${key}`}
						type="button"
						onClick={() => handleOnClick(TableStyles[value])}
					/>
				))}
				<Table style={style} content={content} />
			</Widget>
		</StyledTable>
	);
};

const Table = ({ style, content }: TableProps) => {
	switch (style) {
		case TableStyles.chips:
			return <ChipsTable content={content} />;
		case TableStyles.text:
			return <TextTable content={content} />;
		default:
			return <RegularTable content={content} />;
	}
};
