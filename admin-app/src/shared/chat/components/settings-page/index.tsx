import React, { useEffect } from "react";
import { Widget } from "../../../widget";
import { LineDescription, LineTitle, SettingLine, SettingsUL } from "./styled";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getChatAsync } from "../../redux/settings-page/chat.slice";

export const ChatSettingsWidget = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "chatsSettingsPage",
	});
	const { chatId } = useParams();
	const { data } = useAppSelector((state) => state.chat);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (chatId) dispatch(getChatAsync(+chatId));
	}, []);
	const { id, title } = data.chatInfo;
	return (
		<Widget name={t("settingsWidget")}>
			<SettingsUL>
				<SettingLine>
					<LineTitle>ID Чата</LineTitle>
					<LineDescription>{id}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>Название чата</LineTitle>
					<LineDescription>{title}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>Язык чата</LineTitle>
					<LineDescription></LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>Канал для Журнала</LineTitle>
					<LineDescription></LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>Канал для Журнала</LineTitle>
					<LineDescription />
				</SettingLine>
			</SettingsUL>
		</Widget>
	);
};
