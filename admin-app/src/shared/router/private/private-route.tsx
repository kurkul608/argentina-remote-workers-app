import { useAppSelector } from "redux/hooks";
import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
const Layout = lazy(() =>
	import("shared/layout").then((module) => ({ default: module.Layout }))
);
export const PrivateRoute = () => {
	const { token } = useAppSelector((state) => state.auth);
	const localStorageToken = localStorage.getItem("auth");
	return token || localStorageToken ? (
		<Suspense fallback={<>...</>}>
			<Layout />
		</Suspense>
	) : (
		<Navigate to={"/"} replace />
	);
};
