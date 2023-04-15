import React from "react";
import {
	CircleWrapper,
	InnerCircle,
} from "shared/components/limit-circle/styled";

export interface LimitCircleProps {
	width: number;
	radius: number;
	fontSize: number;
	limit: number;
	current: number;
}
export const LimitCircle = ({
	width,
	radius,
	fontSize,
	limit,
	current,
}: LimitCircleProps) => {
	const dashedArrayValue = 2 * Math.PI * radius;
	const offsetDash = dashedArrayValue / limit;
	const currentOffset = dashedArrayValue - offsetDash * current;
	const secondaryPercent = 50;

	let colorName = "base";
	if (
		dashedArrayValue - (dashedArrayValue * secondaryPercent) / 100 >
		currentOffset
	) {
		colorName = "attention";
	}
	if (currentOffset === 0) {
		colorName = "error";
	}
	return (
		<CircleWrapper>
			<svg
				width={width}
				height={width}
				viewBox={`0 0 ${width} ${width}`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					r={radius}
					style={{ strokeDashoffset: 0, strokeWidth: 2, stroke: "#ffffff" }}
					cx={"50%"}
					cy={"50%"}
				 />
				<InnerCircle
					r={radius}
					cx={"50%"}
					cy={"50%"}
					dashedArrayValue={dashedArrayValue}
					offset={currentOffset}
					color={colorName}
				 />
				<text
					x={"50%"}
					y={"50%"}
					dy=".35em"
					fontSize={fontSize}
					fill={"#ffffff"}
					textAnchor={"middle"}
				>
					{current}
				</text>
			</svg>
		</CircleWrapper>
	);
};
