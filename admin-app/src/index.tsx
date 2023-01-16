import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./shared/i18n/i18n";

const rootNode = document.getElementById("root");
if (rootNode) {
	createRoot(rootNode).render(
		<Provider store={store}>
			<App />
		</Provider>
	);
}
