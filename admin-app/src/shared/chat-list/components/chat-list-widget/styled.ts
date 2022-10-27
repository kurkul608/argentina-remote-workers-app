import styled from "styled-components";
import { color } from "../../../../constants/colors";

export const ChatListWrapper = styled.div`
  max-width: 280px;
  width: 100%;
`;

export const ChatListUL = styled.ul`
  margin-top: 10px;
  li {
    margin-top: 10px;
    font-size: 1.4rem;
    padding: 5px;
    color: ${(props) => color(props.theme.mainTheme).widgetMainText};
    &:hover {
      background-color: #545454;
    }
  }
`;

export const Chat = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ChatTitle = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const ChatPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: silver;
  border: 1px black solid;
`;

export const ChatPhotoWrapper = styled.div`
  position: relative;
  //border: 1px solid red;
`;
