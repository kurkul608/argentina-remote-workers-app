import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
	background: #4caf50;
	color: white;
	padding: 12px 20px;
	border: none;
	cursor: pointer;
	font-size: 16px;
	margin: 5px;
	${(props) =>
		props.disabled &&
		css`
			background: gray;
			cursor: not-allowed;
		`}
`;
