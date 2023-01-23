import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage } from "pages/auth-page";
import { Layout } from "../layout";
import { ChatPage } from "pages/chat-page";
import { ChatListPage } from "pages/chat-list-page";
import { ChatSettings } from "pages/chat-settings";
import { AuthTokenPage } from "pages/auth-token-page";
import { useAppSelector } from "redux/hooks";

const NotFound = () => {
	return <div>Page not found</div>;
};

const PrivateRoute = () => {
	const { token } = useAppSelector((state) => state.auth);
	return token ? <Layout /> : <Navigate to={"/"} replace />;
};

export enum Routes {
	landing = "",
	admin = "admin",
	chatList = "chat",
	chat = "chat/:chatId",
	chatSettings = "chat/:chatId/settings",
	auth = "auth",
	token = "auth/:token",
}
export const router = createBrowserRouter([
	{
		path: Routes.landing,
		element: <></>,
		errorElement: <NotFound />,
	},
	{
		path: Routes.admin,
		element: <PrivateRoute />,
		children: [
			{
				element: <></>,
				index: true,
			},
			{
				path: Routes.chatList,
				element: <ChatListPage />,
			},
			{
				path: Routes.chat,
				element: <ChatPage />,
			},
			{
				path: Routes.chatSettings,
				element: <ChatSettings />,
			},
		],
	},
	{
		path: Routes.auth,
		element: <AuthPage />,
	},
	{
		path: Routes.token,
		element: <AuthTokenPage />,
	},
]);
