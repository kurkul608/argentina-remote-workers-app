import { useAppSelector } from "redux/hooks";
import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { localStorageServiceGet } from "services/local-storage.service";
const Layout = lazy(() =>
	import("shared/layout").then((module) => ({ default: module.Layout }))
);
export const PrivateRoute = () => {
	const { token } = useAppSelector((state) => state.auth);
	const localStorageToken = localStorageServiceGet("auth");
	return token || localStorageToken ? (
		<Suspense fallback={<>...</>}>
			<Layout />
		</Suspense>
	) : (
		<Navigate to={"/"} replace />
	);
};
