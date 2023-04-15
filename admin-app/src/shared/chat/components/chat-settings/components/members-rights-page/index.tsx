import React, { useEffect } from "react";
import { ITabMenu, TabMenu } from "shared/components/tab-menu";
import { Outlet, useMatch } from "react-router-dom";
import { Routes } from "shared/router";
import { TabMenuWrapper } from "shared/chat/components/chat-settings/styled";
import { useNavigate } from "react-router";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { useAppSelector } from "redux/hooks";

export const MembersRights = () => {
	const navigate = useNavigate();
	const { chatInfo } = useAppSelector((state) => state.chat.data);

	const match = useMatch(
		routeBuilderWithReplace(
			[
				Routes.admin,
				Routes.chatList,
				Routes.chat,
				Routes.chatSettings,
				Routes.chatSettingsMembersRights,
			],
			"chatId",
			chatInfo.id
		)
	);

	const TabConfig: ITabMenu[] = [
		{ route: Routes.chatSettingsMembersRightsAdmin, name: "Admin" },
		{ route: Routes.chatSettingsMembersRightsMembers, name: "Members" },
	];

	useEffect(() => {
		if (match) {
			navigate(Routes.chatSettingsMembersRightsAdmin);
		}
	}, [match, navigate]);

	return (
		<TabMenuWrapper>
			<TabMenu
				items={TabConfig}
				baseRoute={[
					Routes.admin,
					Routes.chatList,
					Routes.chat,
					Routes.chatSettings,
					Routes.chatSettingsMembersRights,
				]}
			/>
			<Outlet />
		</TabMenuWrapper>
	);
};
