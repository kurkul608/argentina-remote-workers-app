import React from "react";
import { StyledAside, StyledNavBar } from "./styled";
import { NavLink } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useTranslation } from "react-i18next";
import { routeBuilder } from "../../router/services/route-builder";
import { Routes } from "../../router";
import { ChatLeftBar } from "shared/chat/components/chat-left-bar";
import { useParams } from "react-router";
import { RouteReplacer } from "shared/router/services/route-replacer";
import { useAppSelector } from "redux/hooks";

export const Aside = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });
	const { chatInfo } = useAppSelector((state) => state.chat.data);
	const params = useParams();
	const isHidden = !params.chatId;
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
						to={routeBuilder([Routes.admin, Routes.chatList])}
						className={({ isActive }) =>
							isActive ? "active-nav-link" : undefined
						}
					>
						<BugReportIcon />
						<p>{t("chatList")}</p>
					</NavLink>
				</li>
			</StyledNavBar>
			<ChatLeftBar isHidden={isHidden}>
				<StyledNavBar>
					<NavLink
						end
						to={RouteReplacer(
							routeBuilder([Routes.admin, Routes.chat]),
							"chatId",
							chatInfo.id
						)}
						className={({ isActive }) =>
							isActive ? "active-nav-link" : undefined
						}
					>
						<p>{t("chatCategories.info")}</p>
					</NavLink>
					<NavLink
						end
						to={RouteReplacer(
							routeBuilder([Routes.admin, Routes.chatSettings]),
							"chatId",
							chatInfo.id
						)}
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
