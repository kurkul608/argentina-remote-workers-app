import styled from "styled-components";
import { color } from "constants/colors";

export const LanguageSwitchWrapper = styled.div`
	display: flex;
	gap: 15px;
`;

interface IButtonProps {
	active: boolean;
}
export const LanguageSwitchButton = styled.button<IButtonProps>`
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	color: ${(props) =>
		props.active
			? color(props.theme.mainTheme).activeTabText
			: color(props.theme.mainTheme).breadcrumbsTitleText};
	border: ${(props) =>
		props.active
			? `1px solid ${color(props.theme.mainTheme).activeTabText}`
			: `1px solid ${color(props.theme.mainTheme).breadcrumbsTitleText}`};
	font-size: 16px;
	height: 30px;
	width: 30px;
`;
