import React from "react";
import { StyledButton } from "./styeld";

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
		<StyledButton
			type={type || "button"}
			placeholder={"Enter your username"}
			onClick={onSubmit}
			disabled={isDisabled}
		>
			{label}
		</StyledButton>
	);
};
