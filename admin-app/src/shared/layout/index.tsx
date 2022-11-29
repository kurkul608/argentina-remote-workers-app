import { Header } from "./header";
import { Aside } from "./aside";
import { Outlet } from "react-router-dom";
import React from "react";
import { Main } from "./styled";
import { widgetSize } from "../../constants/size";

export const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Aside />
        <Main size={widgetSize.small}>
          <Outlet />
        </Main>
      </div>
    </>
  );
};
