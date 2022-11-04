import styled from "styled-components";
import { widgetSize } from "../../constants/size";

interface IWrapper {
  size: widgetSize;
}

export const Main = styled.main<IWrapper>`
  width: 100%;
  padding: 25px;
  display: grid;
  align-items: center;
  gap: 25px;
  row-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row dense;
  grid-auto-rows: 450px;
  @media (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
