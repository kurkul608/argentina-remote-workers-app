import styled from "styled-components";
import { color } from "../../constants/colors";

export const WidgetWrapper = styled.div`
  padding: 15px;
  background: ${(props) => color(props.theme.mainTheme).widgetBackGround};
  border: 1px solid ${(props) => color(props.theme.mainTheme).widgetBorderColor};
`;
export const WidgetName = styled.h4`
  font-size: 14px;
  color: ${(props) => color(props.theme.mainTheme).widgetTitleText};
`;
export const WidgetUL = styled.ul`
  li {
    font-size: 12px;
    color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  }
`;
