import styled from "styled-components";
import { color } from "../../../constants/colors";

export const Submit = styled.button`
  padding: 15px;
  width: 100%;
  color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  background: ${(props) => color(props.theme.mainTheme).backGround};
  border-radius: 10px;
  border: none;
  transition: background-color 0.5s;
  &:hover {
    background-color: #1e9530;
    transition: background-color 0.5s;
    cursor: pointer;
  }
  &:disabled {
    background-color: ${(props) =>
      color(props.theme.mainTheme).inputErrorColor};
  }
`;
