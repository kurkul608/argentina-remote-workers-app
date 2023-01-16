import React from "react";
import { StyledAside, StyledNavBar } from "./styled";
import { NavLink } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useTranslation } from "react-i18next";

export const Aside = () => {
  const { t } = useTranslation();
  console.log(t("aside.mainPage"));
  return (
    <StyledAside>
      <StyledNavBar>
        <li>
          <NavLink
            to={""}
            className={({ isActive }) =>
              isActive ? "active-nav-link" : undefined
            }
          >
            <HouseIcon />
            <p>{t("aside.mainPage")}</p>
          </NavLink>
          <NavLink
            to={"test"}
            className={({ isActive }) =>
              isActive ? "active-nav-link" : undefined
            }
          >
            <BugReportIcon />
            <p>{t("aside.test")}</p>
          </NavLink>
        </li>
      </StyledNavBar>
    </StyledAside>
  );
};
