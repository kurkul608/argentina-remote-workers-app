import styled from "styled-components";
import { color } from "../../../../constants/colors";

export const Wrapper = styled.div`
  min-width: 500px;
  font-size: 1.2rem;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const BackButton = styled.div`
  color: white;
`;

export const ChatName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const ChatPhoto = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url("https://sun9-east.userapi.com/sun9-32/s/v1/ig2/_j5Ob0h5RvbFYvwfT2GO-_QLQI-tcBNMZ65rx46Rgu81O1twNZCEx5bBJplggyKYVrnjQdL61cbCHdBLklTrUpi9.jpg?size=391x398&quality=96&type=album");
  background-size: contain;
`;
export const ChatTitle = styled.h3``;
export const ChatUnderTitle = styled.p``;

export const ChatMode = styled.ul`
  position: relative;
  background-color: #212227;
  display: flex;
  gap: 25px;
  padding: 15px 0;
  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 50px;
    background-color: #212227;
    top: 0;
    left: -20px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 50px;
    background-color: #212227;
    top: 0;
    left: 100%;
  }
`;
export const ChatOption = styled.li`
  color: white;
  //background-color: #565656;
  padding: 5px 9px;
`;

export const Chat = styled.div`
  min-height: 400px;
`;

export const ChatWrapper = styled.div`
  margin: 10px 0;
  background-color: #252323;
  display: block;
`;
export const ChatInnerWrapper = styled.div`
  overflow: auto;
  height: 700px;
  &::-webkit-scrollbar {
    background-color: ${(props) =>
      color(props.theme.mainTheme).widgetBackGround};
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f7b03e;
  }
`;

export const ChatMessages = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Message = styled.li`
  color: white;
  margin-left: 10px;
`;
export const MessageTop = styled.div`
  color: black;
  max-width: 464px;
  display: flex;
`;
export const MessageWrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  white-space: pre-wrap;
  word-break: break-word;
  border-radius: 10px;
  background-color: white;
`;

export const MessageBot = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
export const MessageImg = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: url("https://sun9-east.userapi.com/sun9-32/s/v1/ig2/_j5Ob0h5RvbFYvwfT2GO-_QLQI-tcBNMZ65rx46Rgu81O1twNZCEx5bBJplggyKYVrnjQdL61cbCHdBLklTrUpi9.jpg?size=391x398&quality=96&type=album");
  background-size: contain;
`;
export const MessageBotWrapper = styled.div``;
export const MessageTime = styled.div``;
export const MessageAuthor = styled.div``;
export const Date = styled.li`
  color: white;
  text-align: center;
`;
