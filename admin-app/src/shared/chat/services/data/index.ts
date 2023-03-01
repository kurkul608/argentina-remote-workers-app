import { get, post } from "services/api";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IChat, IChatInterface } from "interfaces/chat.interface";
import { ISelectedChat } from "shared/chat/types/chat-types";
import { ChatSettings } from "shared/chat/types/chat-settings";

export interface AllChatsQuery {
	limit: number;
	offset: number;
	isHidden?: boolean;
}

export interface ChatChangeVisibleQuery {
	isHidden: boolean;
}

export const getChatsList = (token: string, query: AllChatsQuery) =>
	get<ITableDataInterface<IChat>>("chats", token, query);

export const getChat = (id: number, token: string) =>
	get<ISelectedChat>(`chats/${id}`, token);

export const getSettings = () =>
	new Promise((resolve) =>
		setTimeout(
			() =>
				resolve({
					userRights: {
						admin: {
							adminList: ["petya", "artemka", "pisya"],
							allowChatAdminCallCommands: false,
						},
						members: {
							useBotCommandsList: [],
							changeBotSettingsAllowedList: [],
							notAffectByRulesList: [],
						},
					},
					greetings: {
						message: [],
						systemMessages: "",
						misc: "",
						leftMembers: "",
					},
				} as ChatSettings),
			750
		)
	);

export const chatChangeVisible = (
	id: number,
	query: ChatChangeVisibleQuery,
	token: string
) =>
	post<IChatInterface>({
		authToken: token,
		query: query,
		path: `chats/${id}/change-visible`,
	});
