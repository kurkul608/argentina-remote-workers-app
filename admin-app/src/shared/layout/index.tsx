import { Header } from "./header";
import { Aside } from "./aside";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import { Main } from "./styled";
import { widgetSize } from "../../constants/size";
import { routeExactMatch } from "../router/services/route-exact";
import { Routes } from "../router";

export const Layout = () => {
	const location = useLocation();
	const autoFlow = routeExactMatch(location.pathname, Routes.chatList);
	return (
		<>
			<Header />
			<div style={{ display: "flex" }}>
				<Aside />
				<Main size={widgetSize.small} gridAutoFlowIsDisabled={autoFlow}>
					<Outlet />
				</Main>
			</div>
		</>
	);
};
