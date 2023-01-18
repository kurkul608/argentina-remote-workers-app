import React from "react";
import { Widget } from "../../../widget";
import {
	BackButton,
	Chat,
	ChatHeader,
	ChatInnerWrapper,
	ChatMessages,
	ChatMode,
	ChatName,
	ChatOption,
	ChatPhoto,
	ChatTitle,
	ChatUnderTitle,
	ChatWrapper,
	Date,
	Message,
	MessageAuthor,
	MessageBot,
	MessageBotWrapper,
	MessageImg,
	MessageTime,
	MessageTop,
	MessageWrapper,
	Wrapper,
} from "./styled";
import { SendMessageWidget } from "../../../message/components/send-message-widget";

export const ChatWidget = () => {
	return (
		<>
			<Widget name={""}>
				<Wrapper>
					<ChatHeader>
						<BackButton>Назад</BackButton>
						<ChatName>
							<ChatTitle>Makson</ChatTitle>
							<ChatUnderTitle>3.5k subscribers</ChatUnderTitle>
						</ChatName>
						<ChatPhoto />
					</ChatHeader>
					<ChatMode>
						<ChatOption className={"active"}>Текущие</ChatOption>
						<ChatOption>Запланированные</ChatOption>
					</ChatMode>
					<Chat>
						<ChatWrapper>
							<ChatInnerWrapper>
								<ChatMessages>
									<Date>10/10/2022</Date>
									<Message>
										<MessageTop>
											<MessageWrapper>Здарова, чурки</MessageWrapper>
										</MessageTop>
										<MessageBot>
											<MessageImg />
											<MessageBotWrapper>
												<MessageAuthor>Botik</MessageAuthor>
												<MessageTime>2:38 AM</MessageTime>
											</MessageBotWrapper>
										</MessageBot>
									</Message>
									<Date>10/10/2022</Date>
									<Message>
										<MessageTop>
											<MessageWrapper>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ligula ullamcorper malesuada proin libero
												nunc consequat interdum varius sit. Amet nisl purus in
												mollis. Eleifend donec pretium vulputate sapien nec.
												Varius sit amet mattis vulputate. Ut pharetra sit amet
												aliquam id. Ipsum a arcu cursus vitae congue mauris
												rhoncus. Molestie at elementum eu facilisis sed odio
												morbi. Magna sit amet purus gravida quis blandit turpis
												cursus. Cum sociis natoque penatibus et magnis dis
												parturient montes. Malesuada pellentesque elit eget
												gravida cum sociis natoque penatibus. Integer feugiat
												scelerisque varius morbi. Accumsan lacus vel facilisis
												volutpat. Et odio pellentesque diam volutpat. Varius
												quam quisque id diam vel quam elementum. Sed faucibus
												turpis in eu mi bibendum neque. In hac habitasse platea
												dictumst vestibulum rhoncus est. Dui vivamus arcu felis
												bibendum ut tristique. Sed arcu non odio euismod lacinia
												at quis risus. Amet luctus venenatis lectus magna
												fringilla urna. Orci eu lobortis elementum nibh. Ac ut
												consequat semper viverra nam libero. Venenatis tellus in
												metus vulputate eu. Consequat interdum varius sit amet.
												Integer malesuada nunc vel risus commodo. Aliquam
												eleifend mi in nulla posuere sollicitudin aliquam
												ultrices sagittis. Pellentesque nec nam aliquam sem et
												tortor consequat. Nunc sed velit dignissim sodales ut eu
												sem integer vitae. Amet facilisis magna etiam tempor
												orci eu lobortis. Sit amet tellus cras adipiscing enim
												eu turpis egestas. Duis tristique sollicitudin nibh sit
												amet. Cursus sit amet dictum sit amet justo donec enim.
												Mauris commodo quis imperdiet massa tincidunt.
												Ullamcorper velit sed ullamcorper morbi tincidunt
												ornare. Neque vitae tempus quam pellentesque nec nam
												aliquam. Ultricies mi quis hendrerit dolor magna eget
												est lorem ipsum. Ipsum faucibus vitae aliquet nec
												ullamcorper sit amet. Turpis in eu mi bibendum neque
												egestas. Maecenas volutpat blandit aliquam etiam erat
												velit. Aliquam etiam erat velit scelerisque in dictum
												non. Morbi tincidunt ornare massa eget egestas purus
												viverra accumsan. Habitant morbi tristique senectus et
												netus et malesuada fames ac. Phasellus vestibulum lorem
												sed risus ultricies tristique. Ornare arcu odio ut sem
												nulla pharetra. Magna etiam tempor orci eu lobortis
												elementum nibh tellus molestie. Elementum sagittis vitae
												et leo duis ut. Amet venenatis urna cursus eget nunc
												scelerisque. Metus dictum at tempor commodo ullamcorper
												a lacus vestibulum. Enim tortor at auctor urna nunc id
												cursus metus. Sed id semper risus in hendrerit gravida.
												Malesuada fames ac turpis egestas sed. Aliquet nec
												ullamcorper sit amet risus nullam eget felis. Mattis
												vulputate enim nulla aliquet porttitor lacus. Pulvinar
												etiam non quam lacus suspendisse faucibus interdum
												posuere lorem. Pharetra magna ac placerat vestibulum
												lectus mauris ultrices eros. Magna fringilla urna
												porttitor rhoncus dolor purus non enim praesent. Amet
												porttitor eget dolor morbi non arcu risus quis varius.
												Et malesuada fames ac turpis egestas maecenas pharetra.
												Ultrices neque ornare aenean euismod. Tempus egestas sed
												sed risus pretium quam vulputate dignissim suspendisse.
												Tincidunt id aliquet risus feugiat. Pretium aenean
												pharetra magna ac placerat. Vulputate ut pharetra sit
												amet aliquam id diam maecenas ultricies. Bibendum at
												varius vel pharetra vel. Nisl nisi scelerisque eu
												ultrices vitae auctor. Maecenas ultricies mi eget mauris
												pharetra et ultrices. Est lorem ipsum dolor sit amet
												consectetur adipiscing elit pellentesque. Eu tincidunt
												tortor aliquam nulla facilisi cras fermentum odio eu.
												Tortor vitae purus faucibus ornare. Ultrices eros in
												cursus turpis massa tincidunt dui ut ornare. Elit ut
												aliquam purus sit amet luctus venenatis. Ac tincidunt
												vitae semper quis lectus nulla at volutpat diam. Nunc
												aliquet bibendum enim facilisis gravida neque convallis
												a cras. Cras sed felis eget velit aliquet sagittis id.
												Massa vitae tortor condimentum lacinia quis vel.
												Consequat id porta nibh venenatis cras sed felis eget
												velit. Metus dictum at tempor commodo. Scelerisque felis
												imperdiet proin fermentum leo. Mauris a diam maecenas
												sed enim ut sem. Nullam ac tortor vitae purus faucibus.
												Cursus in hac habitasse platea dictumst. Pretium viverra
												suspendisse potenti nullam ac tortor vitae purus.
												Vulputate enim nulla aliquet porttitor lacus luctus.
												Massa ultricies mi quis hendrerit dolor magna. Arcu
												felis bibendum ut tristique et egestas quis. At volutpat
												diam ut venenatis tellus. Sed id semper risus in
												hendrerit gravida. Cursus vitae congue mauris rhoncus
												aenean vel elit scelerisque. Facilisi morbi tempus
												iaculis urna id. Felis donec et odio pellentesque. Quam
												quisque id diam vel quam elementum. Quisque sagittis
												purus sit amet volutpat consequat mauris nunc. Morbi
												tristique senectus et netus et malesuada. Tortor id
												aliquet lectus proin nibh nisl.
											</MessageWrapper>
										</MessageTop>
										<MessageBot>
											<MessageImg />
											<MessageBotWrapper>
												<MessageAuthor>Botik</MessageAuthor>
												<MessageTime>2:38 AM</MessageTime>
											</MessageBotWrapper>
										</MessageBot>
									</Message>
									<Date>10/10/2022</Date>
									<Message>
										<MessageTop>
											<MessageWrapper>
												Как же я сладко посрал вчера
											</MessageWrapper>
										</MessageTop>
										<MessageBot>
											<MessageImg />
											<MessageBotWrapper>
												<MessageAuthor>Botik</MessageAuthor>
												<MessageTime>2:38 AM</MessageTime>
											</MessageBotWrapper>
										</MessageBot>
									</Message>
								</ChatMessages>
							</ChatInnerWrapper>
						</ChatWrapper>
					</Chat>
					<SendMessageWidget chatIds={[-1001677100248]} />
				</Wrapper>
			</Widget>
		</>
	);
};
