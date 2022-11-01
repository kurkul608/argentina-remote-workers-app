import styled from "styled-components";
import { color } from "../../../constants/colors";

export const DropdownWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  border: 1px #f7b03e solid;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  .closed {
    transition: all 0.2s ease-in-out;
    transform: rotateZ(180deg) rotateY(180deg);
  }
  .active {
    cursor: default;
  }
  .hidden {
    display: none;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`;

export const Dropdown = styled.div`
  padding: 5px;
  width: 250px;
  min-height: 25px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  @media (max-width: 768px) {
    max-width: 125px;
  }
`;

export const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
`;

export const Table = styled.ul`
  padding: 5px 0;
  position: absolute;
  width: 100%;
  top: 50px;
  left: 0;
  max-height: 200px;
  background-color: ${(props) => color(props.theme.mainTheme).widgetBackGround};
  z-index: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    background-color: ${(props) =>
      color(props.theme.mainTheme).widgetBackGround};
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f7b03e;
  }
`;

export const TableItem = styled.li`
  width: 100%;
  user-select: none;
  cursor: pointer;
  &:hover {
    // * background-color: chatHoverBackgroundColor
    background-color: #545454;
  }
`;
