import React from "react";
import { ButtonWrapper } from "shared/components/button/styled";

interface IButtonProps {
	isDisabled?: boolean;
	children?: string | React.ReactNode;
	onClick?: () => void;
}

export const Button = ({ isDisabled, children, onClick }: IButtonProps) => {
	return (
		<ButtonWrapper onClick={onClick} disabled={isDisabled || false}>
			{children}
		</ButtonWrapper>
	);
};
