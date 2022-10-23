import styled from "styled-components";
import { color } from "../../../constants/colors";

export const StyledHeader = styled.header`
  height: 57px;
  width: 100%;
  position: sticky;
  display: flex;
  align-items: center;
  background-color: ${(props) => color(props.theme.mainTheme).widgetBackGround};
`;

export const StyledIHeaderInformationBlock = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeaderLogoBlock = styled.div`
  height: 100%;
  width: 240px;
  flex: 0 0 auto;
  background-color: ${(props) => color(props.theme.mainTheme).baseText};
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 18px;
    color: ${(props) => color(props.theme.mainTheme).logoText};
  }
`;

export const StyledHeaderSearchBlock = styled.div``;

export const StyledHeaderRightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledHeaderDateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  time {
    color: ${(props) => color(props.theme.mainTheme).baseText};
    font-size: 15px;
  }
`;

export const StyledHeaderAccountWrapper = styled.div`
  display: flex;
  gap: 5px;

  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const StyledHeaderNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: not-allowed;
  margin-right: 25px;

  p {
    font-size: 13px;
    color: ${(props) => color(props.theme.mainTheme).baseText};
  }

  span {
    font-size: 13px;
    color: ${(props) => color(props.theme.mainTheme).regularTabText};
  }
`;
