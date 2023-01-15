import styled from "styled-components";
import { color } from "../../../../constants/colors";
import { Widget } from "../../../widget";
import { WidgetWrapper } from "../../../widget/styled";

export const ChatListWrapper = styled.div`
  flex: 1 0 280px;
  color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  cursor: pointer;
  & > ${WidgetWrapper}:hover {
    background-color: ${(props) =>
      color(props.theme.mainTheme).chatHoverBackgroundColor};
    transition: background-color 0.3s;
  }
`;
export const GridChatsWrapper = styled.div`
  display: grid;
  gap: 10px;
`;
export const ChatListUL = styled.ul`
  margin-top: 10px;

  li {
    margin-top: 10px;
    font-size: 1.4rem;
    padding: 5px;
    color: ${(props) => color(props.theme.mainTheme).widgetMainText};

    &:hover {
      background-color: ${(props) =>
        color(props.theme.mainTheme).chatHoverBackgroundColor};
    }
  }
`;

export const Chat = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  user-select: none;
`;
export const ChatTitle = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.8rem;
  overflow: hidden;
  font-weight: 400;
`;
export const ChatPhoto = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100px;
  background: ${(props) =>
    color(props.theme.mainTheme).chatPhotoBackgroundColor};
  color: ${(props) => color(props.theme.mainTheme).baseWhiteText};
  font-weight: 600;
`;

export const ChatPhotoWrapper = styled.div`
  position: relative;
`;
