import { get, post } from "services/api";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { ChatSettings } from "shared/chat/types/chat-settings";
import { IChatDto } from "shared/chat/types/chat-dto.interface";

export interface AllChatsQuery {
	limit: number;
	offset: number;
	isHidden?: boolean;
}

export interface ChatChangeVisibleQuery {
	isHidden: boolean;
}

export const getChatsList = (token: string, query: AllChatsQuery) =>
	get<ITableDataInterface<IChatDto>>("chats", token, query);

export const getChat = (id: string, token: string) =>
	get<IChatDto>(`chats/${id}`, token);

export const getSettings = (id: string, token: string) =>
	new Promise((resolve) =>
		setTimeout(
			() =>
				resolve({
					userRights: {
						adminList: ["petya", "artem", "mark"],
						allowChatAdminCallCommands: false,
					},
					greetings: {
						message: [
							"Здарова удаленщики, сегодня будет собрание в 6:20 PM по Аргентине, будем обсуждать возможность приобритения снюса через океан",
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id porta nibh. Elit ut aliquam purus sit amet luctus. Nec dui nunc mattis enim ut. Nunc mattis enim ut tellus. In massa tempor nec feugiat nisl. Donec et odio pellentesque diam volutpat commodo sed egestas. Semper eget duis at tellus at urna condimentum mattis. Eget duis at tellus at urna condimentum mattis pellentesque id. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Id consectetur purus ut faucibus pulvinar elementum. Tincidunt lobortis feugiat vivamus at. Dictum non consectetur a erat nam at lectus urna duis.\n" +
								"\n" +
								"Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Netus et malesuada fames ac turpis egestas integer eget. Sodales ut etiam sit amet nisl. Magna etiam tempor orci eu. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Nisi scelerisque eu ultrices vitae auctor eu augue. Orci a scelerisque purus semper eget duis at. Libero justo laoreet sit amet cursus sit amet. Non blandit massa enim nec. Faucibus purus in massa tempor nec. Leo duis ut diam quam. Fringilla phasellus faucibus scelerisque eleifend donec. Nulla facilisi nullam vehicula ipsum a. Sed odio morbi quis commodo.\n" +
								"\n" +
								"Viverra nibh cras pulvinar mattis nunc sed blandit. Ornare massa eget egestas purus viverra accumsan. In cursus turpis massa tincidunt dui. Curabitur gravida arcu ac tortor dignissim. Magna ac placerat vestibulum lectus mauris. Elit eget gravida cum sociis natoque penatibus. Urna nunc id cursus metus aliquam. Arcu non sodales neque sodales ut etiam sit amet nisl. Integer eget aliquet nibh praesent tristique magna. In hac habitasse platea dictumst quisque sagittis purus sit. Egestas purus viverra accumsan in nisl. Faucibus nisl tincidunt eget nullam non. Ipsum nunc aliquet bibendum enim facilisis. Morbi tristique senectus et netus. Accumsan sit amet nulla facilisi morbi tempus. Pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum sed arcu non odio euismod lacinia. Ultricies integer quis auctor elit sed vulputate mi sit amet. Accumsan in nisl nisi scelerisque eu ultrices.",
							"asd",
							"asd",
							"asd",
							"asdsads",
							"asd",
							"asd",
						],
						misc: false,
						systemMessages: false,
						leftMembers: false,
						id,
						token,
					},
				} as ChatSettings),
			750
		)
	);

export const chatChangeVisible = (
	id: string,
	query: ChatChangeVisibleQuery,
	token: string
) =>
	post<IChatDto>({
		authToken: token,
		query: query,
		path: `chats/${id}/change-visible`,
	});
