import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../../pages/auth-page";
import { MainPage } from "../../pages/main-page";
import { Layout } from "../layout";
import { ChatPage } from "../../pages/chat-page";

const NotFound = () => {
  return <div>Page not found</div>;
};

export enum Routes {
  landing = "",
  admin = "admin",
  chatList = "chat",
  chat = "chat/:chatId",
  auth = "auth",
}

export const router = createBrowserRouter([
  {
    path: Routes.landing,
    element: <></>,
    errorElement: <NotFound />,
  },
  {
    path: Routes.admin,
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        path: Routes.chat,
        element: <ChatPage />,
      },
    ],
  },
  {
    path: Routes.auth,
    element: <AuthPage />,
  },
]);
