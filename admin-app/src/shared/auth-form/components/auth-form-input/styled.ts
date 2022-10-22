import styled from "styled-components";
import { color } from "../../../../constants/colors";

export const AuthInput = styled.input`
  color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  background: ${(props) => color(props.theme.mainTheme).backGround};
  padding: 5px 0;
  width: 100%;
  border: none;
  border-bottom: 1px green solid;
`;
