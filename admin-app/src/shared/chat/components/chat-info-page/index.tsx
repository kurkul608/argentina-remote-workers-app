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
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
	chatMembersCount: state.chat.chat?.tgChatInfo.chatMembersCount,
	auth: state.auth,
});
export const ChatInfoWidget = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "chatInfoWidget",
	});
	const { chatId } = useParams();
	const { chatInfo, chatMembersCount, auth } = useAppSelector(selector);
	const dispatch = useAppDispatch();
	const token = getAuthToken(auth)!;
	useEffect(() => {
		if (chatId) dispatch(getChatAsync({ id: +chatId, token }));
	}, []);

	const count = chatMembersCount;
	return (
		<Widget name={t("infoWidgetTitle") as string}>
			<SettingsUL>
				<SettingLine>
					<LineTitle>{t("id")}</LineTitle>
					<LineDescription>{chatInfo?.id}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("chatTitle")}</LineTitle>
					<LineDescription>{chatInfo?.title}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("count")}</LineTitle>
					<LineDescription>{count}</LineDescription>
				</SettingLine>
			</SettingsUL>
		</Widget>
	);
};
