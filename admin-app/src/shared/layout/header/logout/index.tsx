import React from "react";
import { StyledButton } from "shared/layout/header/logout/styled";
import { useAppDispatch } from "redux/hooks";
import { logOut } from "shared/auth/redux/auth.slice";
import { localStorageServiceRemove } from "services/local-storage.service";

export const Logout = () => {
	const dispatch = useAppDispatch();
	const handleOnClick = () => {
		dispatch(logOut());
		localStorageServiceRemove("auth");
	};
	return <StyledButton onClick={() => handleOnClick()}>Выйти</StyledButton>;
};
