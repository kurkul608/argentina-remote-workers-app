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
  font-size: 2.2rem;
  color: ${(props) => color(props.theme.mainTheme).authTitleText};
`;

export const UnderTitle = styled.p`
  font-size: 1.5rem;
  color: ${(props) => color(props.theme.mainTheme).regularTabText};
`;
export const FormWrapper = styled.div`
  margin: 25px 0;
`;
export const StyledForm = styled.form``;

export const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  color: ${(props) => color(props.theme.mainTheme).authInputLabel};
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
