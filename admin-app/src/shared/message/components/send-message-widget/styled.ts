import styled from "styled-components";
import { color } from "constants/colors";

export const SendMessageWrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-right: 50px;
`;
export const WidgetWrapper = styled.div`
	display: flex;
`;
export const MessageWrapper = styled.div`
	flex: 0 0 50%;
`;
export const MessageSettings = styled.div``;
export const MessageSettingsWrapper = styled.div`
	width: 100%;
`;

export const WidgetHeader = styled.div`
	margin-bottom: 22px;
	padding: 5px 0 15px 0;
	color: ${(props) => color(props.theme.mainTheme).widgetMainText};
	font-size: 1.8rem;
	font-weight: 400;
	text-transform: uppercase;
	border-bottom: 1px solid #3c414b;
`;
export const Settings = styled.div`
	&:nth-child(n + 1) {
		margin-bottom: 10px;
	}
`;
export const SettingWrapper = styled.div`
	display: flex;
	gap: 20px;
`;
export const SettingTitle = styled.p`
	color: ${(props) => color(props.theme.mainTheme).widgetMainText};
	font-size: 1.6rem;
`;

export const SettingDescription = styled.p`
	font-size: 1.4rem;
	color: ${(props) => color(props.theme.mainTheme).widgetMainText};
`;
