import React from "react";
import { StyledAside, StyledNavBar } from "./styled";
import { NavLink, useLocation } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useTranslation } from "react-i18next";
import { routeBuilder } from "../../router/services/route-builder";
import { Routes } from "../../router";
import { ChatLeftBar } from "shared/chat/components/chat-left-bar";
import { useParams } from "react-router";
import { routeReplacer } from "shared/router/services/route-replacer";
import { useAppSelector } from "redux/hooks";
import { searchParamsBuilder } from "shared/router/services/search-params-builder";
import { searchParamsGrabber } from "shared/router/services/search-params-grabber";
import { searchParamsFinder } from "shared/router/services/search-params-finder";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({ chat: state.chat.chat });
export const Aside = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });
	const { chat } = useAppSelector(selector);
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
			<ChatLeftBar isHidden={isHidden}>
				<StyledNavBar>
					<NavLink
						end
						to={
							chat
								? routeReplacer(
										routeBuilder([Routes.admin, Routes.chat]),
										"chatId",
										chat.tgChatInfo.chatInfo.id
								  )
								: Routes.admin
						}
						className={({ isActive }) =>
							isActive ? "active-nav-link" : undefined
						}
					>
						<p>{t("chatCategories.info")}</p>
					</NavLink>
					<NavLink
						end
						to={
							chat
								? routeReplacer(
										routeBuilder([Routes.admin, Routes.chatSettings]),
										"chatId",
										chat.tgChatInfo.chatInfo.id
								  )
								: Routes.admin
						}
						className={({ isActive }) =>
							isActive ? "active-nav-link" : undefined
						}
					>
						<p>{t("chatCategories.settings")}</p>
					</NavLink>
				</StyledNavBar>
			</ChatLeftBar>
		</StyledAside>
	);
};
