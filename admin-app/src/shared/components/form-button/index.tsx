import React from "react";
import { Submit } from "./styeld";

interface ISubmit {
	onSubmit?: () => void;
	label: string;
	type?: "button" | "submit" | "reset";
	isDisabled?: boolean;
}

export const Button = ({
	onSubmit,
	label,
	type,
	isDisabled = false,
}: ISubmit) => {
	return (
		<Submit
			type={type || "button"}
			placeholder={"Enter your username"}
			onClick={onSubmit}
			disabled={isDisabled}
		>
			{label}
		</Submit>
	);
};
