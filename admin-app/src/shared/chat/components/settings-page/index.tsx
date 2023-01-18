import React, { useEffect } from "react";
import { Widget } from "../../../widget";
import { LineDescription, LineTitle, SettingLine, SettingsUL } from "./styled";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getChatAsync } from "../../redux/settings-page/chat.slice";

export const ChatSettingsWidget = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "chatsInfoPage",
	});
	const { chatId } = useParams();
	const { data } = useAppSelector((state) => state.chat);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (chatId) dispatch(getChatAsync(+chatId));
	}, []);
	const { id, title } = data.chatInfo;
	const count = data.chatMembersCount;
	return (
		<Widget name={t("infoWidgetTitle")}>
			<SettingsUL>
				<SettingLine>
					<LineTitle>{t("id")}</LineTitle>
					<LineDescription>{id}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("chatTitle")}</LineTitle>
					<LineDescription>{title}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("count")}</LineTitle>
					<LineDescription>{count}</LineDescription>
				</SettingLine>
			</SettingsUL>
		</Widget>
	);
};
