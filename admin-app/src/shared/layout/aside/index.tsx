import React from "react";
import { AsideAccordion, StyledAside, StyledNavBar } from "./styled";
import { NavLink, useLocation } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useTranslation } from "react-i18next";
import {
	routeBuilder,
	routeBuilderWithReplace,
} from "../../router/services/route-builder";
import { Routes } from "../../router";
import { ChatAside } from "shared/chat/components/chat-page/chat-aside";
import { useParams } from "react-router";
import { useAppSelector } from "redux/hooks";
import { searchParamsBuilder } from "shared/router/services/search-params-builder";
import { searchParamsGrabber } from "shared/router/services/search-params-grabber";
import { searchParamsFinder } from "shared/router/services/search-params-finder";
import { Accordion } from "shared/components/accordion";
import { routeExactMatch } from "shared/router/services/route-exact";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
});

export const Aside = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });
	const { chatInfo } = useAppSelector(selector);
	const locate = useLocation();
	const params = useParams();
	const isHidden = !params.chatId;
	const searchParams = searchParamsGrabber(locate.search);
	return (
		<StyledAside>
			<StyledNavBar>
				<li>
					<NavLink
						end
						to={routeBuilder([Routes.admin])}
						className={({ isActive }) =>
							isActive ? "active-nav-link" : undefined
						}
					>
						<HouseIcon />
						<p>{t("mainPage")}</p>
					</NavLink>
					<NavLink
						end
						to={{
							pathname: routeBuilder([Routes.admin, Routes.chatList]),
							search: searchParamsBuilder({ isHidden: false }),
						}}
						className={({ isActive }) =>
							!searchParamsFinder(searchParams, "isHidden") && isActive
								? "active-nav-link"
								: undefined
						}
					>
						<BugReportIcon />
						<p>{t("chatList")}</p>
					</NavLink>
					<NavLink
						end
						to={{
							pathname: routeBuilder([Routes.admin, Routes.chatList]),
							search: searchParamsBuilder({ isHidden: true }),
						}}
						className={({ isActive }) =>
							searchParamsFinder(searchParams, "isHidden") && isActive
								? "active-nav-link"
								: undefined
						}
					>
						<BugReportIcon />
						<p>{t("hiddenChatList")}</p>
					</NavLink>
				</li>
			</StyledNavBar>
			<ChatAside isHidden={isHidden}>
				<StyledNavBar>
					<NavLink
						end
						to={
							chatInfo
								? routeBuilderWithReplace(
										[Routes.admin, Routes.chatList, Routes.chat],
										"chatId",
										chatInfo.id
								  )
								: Routes.admin
						}
						className={({ isActive }) =>
							isActive ? "active-nav-link" : undefined
						}
						onClick={(e) => e.stopPropagation()}
					>
						<p>{t("chatCategories.info")}</p>
					</NavLink>
					<AsideAccordion>
						<Accordion
							name={"SETTINGS"}
							isOpen={routeExactMatch(locate.pathname, Routes.chatSettings, 1)}
						>
							<NavLink
								to={
									chatInfo
										? routeBuilderWithReplace(
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
										: Routes.admin
								}
								className={({ isActive }) =>
									isActive ? "active-nav-link" : undefined
								}
							>
								<p>User Rights</p>
							</NavLink>
							<NavLink
								to={
									chatInfo
										? routeBuilderWithReplace(
												[
													Routes.admin,
													Routes.chatList,
													Routes.chat,
													Routes.chatSettings,
													Routes.chatSettingsGreeting,
												],
												"chatId",
												chatInfo.id
										  )
										: Routes.admin
								}
								className={({ isActive }) =>
									isActive ? "active-nav-link" : undefined
								}
							>
								<p>Greeting</p>
							</NavLink>
							<NavLink
								to={
									chatInfo
										? routeBuilderWithReplace(
												[
													Routes.admin,
													Routes.chatList,
													Routes.chat,
													Routes.chatSettings,
													Routes.chatSettingsModeration,
												],
												"chatId",
												chatInfo.id
										  )
										: Routes.admin
								}
								className={({ isActive }) =>
									isActive ? "active-nav-link" : undefined
								}
							>
								<p>Moderation</p>
							</NavLink>
						</Accordion>
					</AsideAccordion>
				</StyledNavBar>
			</ChatAside>
		</StyledAside>
	);
};
