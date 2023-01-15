import { Header } from "./header";
import { Aside } from "./aside";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import { Main } from "./styled";
import { widgetSize } from "../../constants/size";

export const Layout = () => {
  const location = useLocation();
  const autoFlow = location.pathname !== "/";
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Aside />
        <Main size={widgetSize.small} gridAutoFlowIsEnable={autoFlow}>
          <Outlet />
        </Main>
      </div>
    </>
  );
};
