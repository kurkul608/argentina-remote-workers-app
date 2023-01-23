import React from "react";
import { StyledButton } from "shared/layout/header/logout/styled";
import { useAppDispatch } from "redux/hooks";
import { logOut } from "shared/auth/redux/auth.slice";

export const Logout = () => {
	const dispatch = useAppDispatch();
	const handleOnClick = () => {
		dispatch(logOut());
		localStorage.removeItem("auth");
	};
	return <StyledButton onClick={() => handleOnClick()}>Выйти</StyledButton>;
};
