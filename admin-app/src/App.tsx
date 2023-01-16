import React, { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { Theme } from "./constants/theme";
import { RouterProvider } from "react-router";
import { router } from "./shared/router";

const darkTheme: DefaultTheme = {
	mainTheme: Theme.dark,
};
const lightTheme: DefaultTheme = {
	mainTheme: Theme.light,
};

export const App = () => {
	const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
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
