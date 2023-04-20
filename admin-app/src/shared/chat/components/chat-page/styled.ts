import styled from "styled-components";
import { color } from "constants/colors";
import { WidgetWrapper } from "shared/widget/styled";

export const ChatListWrapper = styled.div`
	color: ${(props) => color(props.theme.mainTheme).widgetMainText};
	cursor: pointer;
	& > ${WidgetWrapper}:hover {
		background-color: ${(props) =>
			color(props.theme.mainTheme).chatHoverBackgroundColor};
		transition: background-color 0.3s;
	}
`;
export const StyledChatList = styled.div`
	width: 100%;
	max-width: 780px;
	align-self: flex-start;
`;

export const ChatsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Chat = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	user-select: none;
`;
export const ChatTitle = styled.h3`
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.8rem;
	overflow: hidden;
	font-weight: 400;
`;
export const ChatPhoto = styled.div<{ chatPhoto?: string }>`
	display: flex;
	width: 50px;
	height: 50px;
	align-items: center;
	justify-content: center;
	text-align: center;
	border-radius: 100px;
	background: ${(props) =>
		props.chatPhoto
			? `url(${props.chatPhoto})`
			: color(props.theme.mainTheme).chatPhotoBackgroundColor};
	color: ${(props) => color(props.theme.mainTheme).baseWhiteText};
	background-size: 100%;
	font-weight: 600;
`;

export const ChatPhotoWrapper = styled.div`
	height: 100%;
	position: relative;
`;
export const ChatTitleWrapper = styled.div``;
export const Subscribers = styled.span``;
export const SvgWrapper = styled.span`
	width: 24px;
`;
export const ChatWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

export const TextWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
