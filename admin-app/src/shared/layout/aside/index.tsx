import React from "react";
import { StyledAside, StyledNavBar } from "./styled";
import { NavLink } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useTranslation } from "react-i18next";
import { routeBuilder } from "../../router/services/route-builder";
import { Routes } from "../../router";

export const Aside = () => {
  const { t } = useTranslation("translation", { keyPrefix: "aside" });
  return (
    <StyledAside>
      <StyledNavBar>
        <li>
          <NavLink
            to={routeBuilder([Routes.admin])}
            className={({ isActive }) =>
              isActive ? "active-nav-link" : undefined
            }
          >
            <HouseIcon />
            <p>{t("mainPage")}</p>
          </NavLink>
          <NavLink
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
    </StyledAside>
  );
};
