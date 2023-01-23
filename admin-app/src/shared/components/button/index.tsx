import React from "react";
import { ButtonWrapper } from "shared/components/button/styled";

interface IButtonProps {
	isDisabled?: boolean;
	children?: string | React.ReactNode;
}

export const Button = ({ isDisabled, children }: IButtonProps) => {
	return (
		<ButtonWrapper disabled={isDisabled || false}>{children}</ButtonWrapper>
	);
};
