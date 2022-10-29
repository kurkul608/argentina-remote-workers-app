import styled from "styled-components";
import { color } from "../../../../constants/colors";

export const ChatListWrapper = styled.div`
  flex: 1 0 280px;
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
