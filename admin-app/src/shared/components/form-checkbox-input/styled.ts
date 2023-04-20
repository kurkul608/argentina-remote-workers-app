import styled from "styled-components";
import { color } from "constants/colors";

export const InputWrapper = styled.div``;
export const Label = styled.label`
	position: relative;
	display: flex;
	gap: 20px;
	width: 100%;
	padding: 15px 20px;

	cursor: pointer;
`;
export const CheckBox = styled.span`
  position: relative;
  height: 20px;
  width: 20px;
  display: block;
  z-index: 1;
  border: 1px solid ${(props) =>
		color(props.theme.mainTheme).inputUncheckedColor};};
`;
export const Input = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	z-index: 0;

	&:checked + ${CheckBox} {
		border-color: ${(props) => color(props.theme.mainTheme).inputCheckedColor};
		background-color: ${(props) =>
			color(props.theme.mainTheme).inputCheckedColor};
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
	}
`;

export const Title = styled.span``;
