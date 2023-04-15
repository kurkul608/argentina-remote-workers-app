import styled from "styled-components";
import { ButtonWrapper } from "shared/components/button/styled";
import { color } from "constants/colors";

export const BuilderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Title = styled.h3`
	margin-top: 20px;
	color: #a5a5a5;
	font-weight: 400;
	font-size: 2rem;
`;
export const BuilderHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Limit = styled.h3`
	margin-top: 20px;
	color: #ffffff;
	font-weight: 400;
	font-size: 1.4rem; ;
`;

export const Message = styled.div`
	display: flex;
	align-items: end;
	gap: 10px;
	flex: 1 1 0;
`;
export const TextBlock = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 15px;
	gap: 7px;
	border: ${(props) => color(props.theme.mainTheme).messageWidgetBorderColor}
		1px solid;
	background-color: ${(props) => color(props.theme.mainTheme).widgetBackGround};
	max-width: 480px;
	border-radius: 12px;
	font-size: 1.6rem;
	font-weight: 400;
	color: #ffffff;
	flex: 1 1 0;
`;
export const MessageLogo = styled.div`
	width: 26px;
	height: 26px;
	border-radius: 100%;
	border: 1px solid #ffffff;
`;
export const MessageText = styled.div`
	display: block;
	text-overflow: ellipsis;
	word-wrap: break-word;
	line-height: 2.6rem;
	overflow: hidden;
	height: 50px;
	margin-bottom: 20px;
`;
export const MessageAuthor = styled.div`
	color: #a5a5a5;
	font-weight: 600;
`;
export const MessageTime = styled.div`
	position: absolute;
	right: 20px;
	bottom: 5px;
	font-size: 1.2rem;
`;
export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Settings = styled.div`
	display: flex;
	align-items: center;
`;

export const CreateMessageButton = styled.button`
	padding: 14px 0;
	color: #a5a5a5;
	border-radius: 7px;
	border: 1px dashed #a5a5a5;
	background-color: transparent;
	transition: background-color 0.2s;
	cursor: pointer;
	&:hover {
		background-color: #35383c;
		transition: background-color 0.2s;
	}
`;
export const MessageWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const MessageTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
export const ButtonWrapperExample = styled.div`
	& > ${ButtonWrapper} {
		background-color: transparent;
		padding: 0;
		border-radius: 10px;
	}
`;
