import React from "react";
// import { useAppSelector } from "redux/hooks";
import {
	TopBarChatPhoto,
	TopBarWrapper,
} from "shared/chat/components/chat-top-bar/styled";
import { Widget } from "shared/widget";
import { Button } from "shared/components/button";

export const ChatTopBar = () => {
	// const { chatInfo } = useAppSelector((state) => state.chat.data);
	return (
		<>
			<Widget name={""}>
				<TopBarWrapper>
					<TopBarChatPhoto />
					<Button isDisabled={false}>save</Button>
				</TopBarWrapper>
				;
			</Widget>
			;
		</>
	);
};
