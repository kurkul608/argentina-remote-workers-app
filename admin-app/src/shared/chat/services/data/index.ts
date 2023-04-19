import { get, post } from "services/api";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IChatDto } from "shared/chat/interfaces/chat-dto.interface";

export interface AllChatsQuery {
	limit: number;
	offset: number;
}

export interface ChatChangeVisibleQuery {
	isHidden: boolean;
}

export const getChatsList = (token: string, query: AllChatsQuery) =>
	get<ITableDataInterface<IChatDto>>("chats", token, query);

export const getChat = (id: number, token: string) =>
	get<IChatDto>(`chats/${id}`, token);

export const chatChangeVisible = (
	id: number,
	query: ChatChangeVisibleQuery,
	token: string
) =>
	post<IChatDto>({
		authToken: token,
		query: query,
		path: `chats/${id}/change-visible`,
	});
