import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../../pages/auth-page";
import { MainPage } from "../../pages/main-page";
import { Layout } from "../layout";

const NotFound = () => {
  return <div>Page not found</div>;
};
export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"test"} element={<div>Test content</div>} />
      </Route>
      <Route path={"auth"} element={<AuthPage />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};
