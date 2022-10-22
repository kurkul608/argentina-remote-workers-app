import styled from "styled-components";
import { color } from "../../constants/colors";

export const Wrapper = styled.div`
  margin: 150px auto;
  max-width: 500px;
  width: 100%;
  border-radius: 5px;
  padding: 50px;
  background-color: ${(props) => color(props.theme.mainTheme).widgetBackGround};
`;

export const Title = styled.h1`
  color: ${(props) => color(props.theme.mainTheme).dateText};
`;

export const UnderTitle = styled.p`
  color: ${(props) => color(props.theme.mainTheme).regularTabText};
`;
export const FormWrapper = styled.div`
  margin: 25px 0;
`;
export const StyledForm = styled.form``;

export const Label = styled.label`
  display: block;
  color: ${(props) => color(props.theme.mainTheme).regularTabText};
  margin-bottom: 5px;
`;

export const Submit = styled.button`
  display: block;
  padding: 15px;
  width: 100%;
  color: ${(props) => color(props.theme.mainTheme).widgetMainText};
  background: ${(props) => color(props.theme.mainTheme).backGround};
  border-radius: 10px;
  border: none;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
