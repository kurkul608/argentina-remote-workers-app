import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage } from "pages/auth-page";
// import { Layout } from "../layout";
import { ChatPage } from "pages/chat-page";
import { ChatListPage } from "pages/chat-list-page";
import { ChatSettings } from "pages/chat-settings";
import { useAppSelector } from "redux/hooks";
const Layout = lazy(() =>
	import("../layout").then((module) => ({ default: module.Layout }))
);
const NotFound = () => {
	return <div>Page not found</div>;
};

const PrivateRoute = () => {
	const { token } = useAppSelector((state) => state.auth);
	const localStorageToken = localStorage.getItem("auth");
	return token || localStorageToken ? (
		<Suspense fallback={<>...</>}>
			<Layout />
		</Suspense>
	) : (
		<Navigate to={"/"} replace />
	);
};

export enum Routes {
	landing = "",
	admin = "admin",
	chatList = "chat",
	chat = "chat/:chatId",
	chatSettings = "chat/:chatId/settings",
	auth = "auth/:token",
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
]);
