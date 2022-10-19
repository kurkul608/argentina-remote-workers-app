import React, { FC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { AuthPage } from "../../pages/auth-page";
import { Header } from "../components/header";
import { Aside } from "../components/aside";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Aside />
        <Outlet />
      </div>
    </>
  );
};
const NotFound = () => {
  return <div>Page not found</div>;
};
export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"test"} element={<div>Test content</div>} />
      </Route>
      <Route path={"auth"} element={<AuthPage />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};
