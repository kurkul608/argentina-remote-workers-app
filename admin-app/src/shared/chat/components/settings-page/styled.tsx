import styled from "styled-components";
import { color } from "../../../../constants/colors";

export const SettingsUL = styled.ul`
  margin-top: 50px;
  width: 100%;
  color: ${(props) => color(props.theme.mainTheme).widgetMainText};
`;
export const SettingLine = styled.li`
  width: 100%;
  font-size: 2rem;
  display: flex;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  justify-content: space-between;
`;
export const LineTitle = styled.h5``;
export const LineDescription = styled.p``;
