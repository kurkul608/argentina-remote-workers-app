import React, { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { Theme } from "constants/theme";
import { RouterProvider } from "react-router";
import { router } from "shared/router";
import { logIn } from "shared/auth/redux/auth.slice";
import { getAuthToken } from "helpers/storage-parser";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { localStorageServiceGet } from "services/local-storage.service";

export const darkTheme: DefaultTheme = {
	mainTheme: Theme.dark,
};
export const lightTheme: DefaultTheme = {
	mainTheme: Theme.light,
};

export const App = () => {
	const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
	const auth = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const tokenStorage = getAuthToken(auth);
	useEffect(() => {
		if (!tokenStorage) {
			const tokenFromLocalStorage = localStorageServiceGet("auth");
			dispatch(logIn(tokenFromLocalStorage));
		}
	}, [tokenStorage]);

	useEffect(() => {
		if (!window.matchMedia) {
			setTheme(lightTheme);
		} else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme(darkTheme);
			} else {
				setTheme(lightTheme);
			}
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", (e) => {
					if (e.matches) {
						setTheme(darkTheme);
					} else {
						setTheme(lightTheme);
					}
				});
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
