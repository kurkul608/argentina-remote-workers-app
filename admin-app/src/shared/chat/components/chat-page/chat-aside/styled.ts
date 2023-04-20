import styled from "styled-components";
import { color } from "constants/colors";

export const ChatLeftBarWrapper = styled.div`
	padding: 0 15px;
	border-top: 1px #f7b03e solid;
	font-size: 1.5rem;
`;
export const ChatBarTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	gap: 15px;
`;
export const ChatBarImageWrapper = styled.div`
	width: 20px;
	height: 20px;
	background-color: black;
	border-radius: 50px;
`;
export const ChatBarTitle = styled.span`
	color: ${(props) => color(props.theme.mainTheme).baseWhiteText};
`;

export const ChatNavWrapper = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;
