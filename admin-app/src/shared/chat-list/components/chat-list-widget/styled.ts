import styled from "styled-components";
import { color } from "../../../../constants/colors";

export const ChatListUL = styled.ul`
  li {
    font-size: 12px;
    color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  }
`;
