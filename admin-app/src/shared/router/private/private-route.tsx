import { useAppDispatch, useAppSelector } from "redux/hooks";
import React, { lazy, Suspense, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
	localStorageServiceGet,
	localStorageServiceRemove,
} from "services/local-storage.service";
import { checkAuthAsync } from "shared/auth/redux/auth.slice";
const Layout = lazy(() =>
	import("shared/layout").then((module) => ({ default: module.Layout }))
);
export const PrivateRoute = () => {
	const dispatch = useAppDispatch();
	const { token, isExpired } = useAppSelector((state) => state.auth);
	const localStorageToken = localStorageServiceGet("auth");
	useEffect(() => {
		if (localStorageToken) {
			dispatch(checkAuthAsync(localStorageToken));
		}
	}, [localStorageToken]);
	useEffect(() => {
		if (isExpired) {
			localStorageServiceRemove("auth");
		}
	}, [isExpired]);
	return (token || localStorageToken) && !isExpired ? (
		<Suspense fallback={<>...</>}>
			<Layout />
		</Suspense>
	) : (
		<Navigate to={"/"} replace />
	);
};
