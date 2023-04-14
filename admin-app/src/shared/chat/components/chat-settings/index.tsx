// import { ITabMenu, TabMenu } from "shared/components/tab-menu";
// import { Routes } from "shared/router";
// import React from "react";

// export interface ChatSettingsContainerProps {
// 	tabConfig: ITabMenu[];
// 	commonTabRoute: Routes;
// 	currentTabRoute: Routes;
// }

// export const ChatSettingsContainer = ({
// 	tabConfig,
// 	commonTabRoute,
// 	currentTabRoute,
// }: ChatSettingsContainerProps) => {
// 	const navigate = useNavigate();
// 	const { chatInfo } = useAppSelector((state) => state.chat.data);
// 	const match = useMatch(
// 		routeBuilderWithReplace(
// 			[
// 				Routes.admin,
// 				Routes.chatList,
// 				Routes.chat,
// 				Routes.chatSettings,
// 				commonTabRoute,
// 			],
// 			"chatId",
// 			chatInfo.id
// 		)
// 	);

// useEffect(() => {
// 	if (match) {
// 		navigate(Routes.chatSettingsModerationRules);
// 	}
// }, [match, navigate]);

// 	return (
// 		<TabMenuWrapper>
// 			<TabMenu
// 				items={tabConfig}
// 				baseRoute={[
// 					Routes.admin,
// 					Routes.chatList,
// 					Routes.chat,
// 					Routes.chatSettings,
// 					currentTabRoute,
// 				]}
// 			/>
// 			<Outlet />
// 		</TabMenuWrapper>
// 	);
// };
// interface SettingsPageProps {
// 	children: React.ReactElement;
// 	commonTabRoute: Routes;
// 	currentTabRoute: Routes;
// }
// export const SettingsPage = ({
// 	commonTabRoute,
// 	currentTabRoute,
// 	children,
// }: SettingsPageProps) => {
// 	const tabConfigModeration: ITabMenu[] = [
// 		{ route: Routes.chatSettingsModerationRules, name: "Rules" },
// 		{ route: Routes.chatSettingsModerationReport, name: "Report" },
// 		{ route: Routes.chatSettingsModerationNewcomers, name: "Newcomers" },
// 		{ route: Routes.chatSettingsModerationFilters, name: "Filters" },
// 		{ route: Routes.chatSettingsModerationCommands, name: "Commands" },
// 		{
// 			route: Routes.chatSettingsModerationWarningSystem,
// 			name: "Warning System",
// 		},
// 		{ route: Routes.chatSettingsModerationExtra, name: "Extra" },
// 	];
// 	switch (commonTabRoute) {
// 		case Routes.chatSettingsModeration:
// 			return cloneElement(<ChatSettingsContainer />, {
// 				tabConfig: tabConfigModeration,
// 				commonTabRoute,
// 				currentTabRoute,
// 			});
// 	}
// };
