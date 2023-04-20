import React, { useEffect } from "react";
import { PageTitle } from "shared/components/title";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import { getChatAsync } from "shared/chat/redux/chat-info-page/chat.slice";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getAuthToken } from "helpers/storage-parser";
import { getChatSettingsAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";

export const ChatSettings = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const location = useLocation();
	const { chatId } = useParams();
	const dispatch = useAppDispatch();
	const { auth } = useAppSelector((state) => ({
		auth: state.auth,
	}));
	const token = getAuthToken(auth)!;

	useEffect(() => {
		if (chatId) {
			dispatch(getChatAsync({ id: chatId, token }));
			dispatch(getChatSettingsAsync({ id: chatId, token }));
		}
	}, []);
	return (
		<>
			<PageTitle>
				<h3>{t("chats")}</h3>
				<Breadcrumbs link={location.pathname} />
			</PageTitle>
			<Outlet />
			{/*<WidgetWrapper>*/}
			{/*	<ChatInfoWidget />*/}
			{/*</WidgetWrapper>*/}
		</>
	);
};
