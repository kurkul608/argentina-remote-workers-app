import React from "react";
import { TitleWrapper } from "./styled";

interface ITitle {
	children: React.ReactNode;
}

export const PageTitle = ({ children }: ITitle) => {
	return <TitleWrapper>{children}</TitleWrapper>;
};
