import styled from "styled-components";
import { color } from "../../../constants/colors";

export const FormInputWrapper = styled.div`
  position: relative;
  padding: 0 10px;
  border: 1px #f7b03e solid;
  background: ${(props) => color(props.theme.mainTheme).backGround};
  border-radius: 5px;
`;
export const Input = styled.input`
  color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  background: ${(props) => color(props.theme.mainTheme).backGround};
  padding: 10px 0;
  width: 100%;
  border: none;
`;

export const Placeholder = styled.label`
  position: absolute;
  font-size: 1.5rem;
  top: 8px;
  left: 11px;
  transition: all 0.3s;
  color: ${(props) => color(props.theme.mainTheme).authInputLabel};
  user-select: none;
  z-index: 0;

  ${FormInputWrapper}:focus-within & {
    top: -23px;
    left: 0;
    color: ${(props) => color(props.theme.mainTheme).authInputFilled};
    transition: all 0.3s;
  }
`;

export const PlaceholderFilled = styled(Placeholder)`
  top: -23px;
  left: 0;
  color: ${(props) => color(props.theme.mainTheme).authInputFilled};
`;
