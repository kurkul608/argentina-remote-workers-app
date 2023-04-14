import Switch from "@mui/material/Switch";
import React from "react";
import {
	BuilderHeader,
	BuilderWrapper,
	Limit,
	MessageText,
	MessageAuthor,
	MessageLogo,
	MessageTime,
	TextBlock,
	Settings,
	Title,
	Message,
	Wrapper,
	CreateMessageButton,
	MessageWrapper,
	ButtonWrapperExample,
	MessageTitle,
} from "shared/chat/components/chat-bot/components/message-builder/styled";
import { Icon, IconName } from "shared/components/icon";
import { Button } from "shared/components/button";
import { LimitCircle } from "shared/components/limit-circle";
import { SendMessageWidget } from "shared/message/components/send-message-widget";

export interface MessageBuilderProps {
	name: string;
	limit: number;
	messages?: any[];
	onCreate?: () => never;
	chatId: number;
}

export const MessageBuilder = ({
	name,
	limit,
	messages,
	chatId,
}: MessageBuilderProps) => {
	const localTime = new Date().toLocaleTimeString("en-US", {
		hour12: true,
		hour: "numeric",
		minute: "numeric",
	});

	return (
		<BuilderWrapper>
			<BuilderHeader>
				<Title>{name} messages:</Title>
				<Limit>
					<LimitCircle
						width={50}
						radius={15}
						fontSize={14}
						limit={limit}
						current={messages?.length || 0}
					/>
				</Limit>
			</BuilderHeader>
			{(messages?.length || 0) < limit ? (
				<CreateMessageButton>+ Add new left message</CreateMessageButton>
			) : null}
			<SendMessageWidget chatIds={[chatId]} />
			{messages?.length
				? messages.map((message, id) => (
						<Wrapper key={`message--${message}--${id}`}>
							<Message>
								<TextBlock>
									<MessageWrapper>
										<MessageTitle>
											<MessageLogo />
											<MessageAuthor>ChatBot</MessageAuthor>
										</MessageTitle>
										<Settings>
											<Switch />
											<ButtonWrapperExample>
												<Button>
													<Icon name={IconName.settings} />
												</Button>
											</ButtonWrapperExample>
										</Settings>
									</MessageWrapper>
									<MessageText>{message}</MessageText>
									<MessageTime>{localTime}</MessageTime>
								</TextBlock>
							</Message>
						</Wrapper>
				  ))
				: null}
		</BuilderWrapper>
	);
};
