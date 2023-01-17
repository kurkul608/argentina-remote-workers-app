import React from "react";
import { ChatSettingsWidget } from "../../shared/chat/components/settings-page";
import { PageTitle } from "../../shared/components/title";
import { Breadcrumbs } from "../../shared/components/breadcrumbs";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const ChatSettings = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const location = useLocation();

	return (
		<>
			<PageTitle>
				<h3>{t("chats")}</h3>
				<Breadcrumbs link={location.pathname}></Breadcrumbs>
			</PageTitle>
			<ChatSettingsWidget />
		</>
	);
};
