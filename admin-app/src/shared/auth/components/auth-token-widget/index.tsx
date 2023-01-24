import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { logIn } from "shared/auth/redux/auth.slice";
import { localStorageServiceSet } from "services/local-storage.service";
export const AuthTokenComponent = () => {
	const { token: authTokenParams } = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (authTokenParams) {
			localStorageServiceSet("auth", authTokenParams);
			dispatch(logIn(authTokenParams));
			navigate("/admin");
		}
	}, [authTokenParams]);
	return <></>;
};
