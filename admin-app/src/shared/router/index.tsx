import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "pages/auth-page";
import { Layout } from "../layout";
import { ChatPage } from "pages/chat-page";
import { ChatListPage } from "pages/chat-list-page";
import { ChatSettings } from "pages/chat-settings";

const NotFound = () => {
	return <div>Page not found</div>;
};

export enum Routes {
	landing = "",
	admin = "admin",
	chatList = "chat",
	chat = "chat/:chatId",
	chatSettings = "chat/:chatId/settings",
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
]);
