import { Header } from "./header";
import { Aside } from "./aside";
import { Outlet } from "react-router-dom";
import React from "react";
import { Main } from "./styled";

export const Layout = () => {
	return (
		<>
			<Header />
			<div style={{ display: "flex" }}>
				<Aside />
				<Main>
					<Outlet />
				</Main>
			</div>
		</>
	);
};
