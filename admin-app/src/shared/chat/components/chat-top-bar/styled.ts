import styled from "styled-components";

export const TopBarWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
export const TopBarChatPhoto = styled.div<{ chatPhoto?: string }>`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	background-image: ${(props) =>
		props.chatPhoto ? `url(${props.chatPhoto})` : "gray"};
	background-size: 100%;
`;
