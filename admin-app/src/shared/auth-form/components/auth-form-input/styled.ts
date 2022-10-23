import styled from "styled-components";
import { color } from "../../../../constants/colors";

export const AuthInputWrapper = styled.div`
  position: relative;
  padding: 0 10px;
  border: 1px #f7b03e solid;
  background: ${(props) => color(props.theme.mainTheme).backGround};
  border-radius: 5px;
`;
export const AuthInput = styled.input`
  color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  background: ${(props) => color(props.theme.mainTheme).backGround};
  padding: 10px 0;
  width: 100%;
  border: none;
  &qwe {
    margin-top: 10px;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  font-size: 1.5rem;
  top: 8px;
  color: ${(props) => color(props.theme.mainTheme).authInputLabel};
  left: 11px;
  transition: all 0.3s;
  ${AuthInputWrapper}:focus-within & {
    top: -23px;
    left: 0;
    transition: all 0.3s;
  }
`;

export const PlaceholderFilled = styled(Placeholder)`
  top: -23px;
  left: 0;
`;
