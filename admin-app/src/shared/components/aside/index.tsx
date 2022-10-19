import React from "react";
import { StyledAside, StyledNavBar } from "./styled";
import { NavLink } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import BugReportIcon from "@mui/icons-material/BugReport";

export const Aside = () => {
  return (
    <StyledAside>
      <StyledNavBar>
        <li>
          <NavLink
            to={""}
            className={({ isActive }) =>
              isActive ? "active-nav-link" : undefined
            }
            end
          >
            <HouseIcon />
            <p>Main page</p>
          </NavLink>
          <NavLink
            to={"test"}
            className={({ isActive }) =>
              isActive ? "active-nav-link" : undefined
            }
          >
            <BugReportIcon />
            <p>Test</p>
          </NavLink>
        </li>
      </StyledNavBar>
    </StyledAside>
  );
};
