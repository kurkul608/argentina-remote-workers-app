import React, { useEffect } from "react";
import { Widget } from "shared/widget";
import { LineDescription, LineTitle, SettingLine, SettingsUL } from "./styled";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getChatAsync } from "../../redux/chat-info-page/chat.slice";
import { getAuthToken } from "helpers/storage-parser";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chat: state.chat.chat,
	auth: state.auth,
});

export const ChatSettingsWidget = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "chatInfoWidget",
	});

	const { chatId } = useParams();

	const { chat, auth } = useAppSelector(selector);

	const dispatch = useAppDispatch();

	const token = getAuthToken(auth)!;

	useEffect(() => {
		if (chatId) dispatch(getChatAsync({ id: +chatId, token }));
	}, []);

	return (
		<Widget name={t("infoWidgetTitle") as string}>
			<SettingsUL>
				<SettingLine>
					<LineTitle>{t("id")}</LineTitle>
					<LineDescription>{chat?.tgChatInfo.chatInfo.id}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("chatTitle")}</LineTitle>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-ignore*/}
					<LineDescription>{chat?.tgChatInfo.chatInfo.title}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("count")}</LineTitle>
					<LineDescription>{chat?.tgChatInfo.chatMembersCount}</LineDescription>
				</SettingLine>
			</SettingsUL>
		</Widget>
	);
};
