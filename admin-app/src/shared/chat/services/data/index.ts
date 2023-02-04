import { get, post } from "services/api";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IChat, IChatInterface } from "interfaces/chat.interface";
import { ISelectedChat } from "../../types";

export interface AllChatsQuery {
	limit: number;
	offset: number;
}

export interface ChatChangeVisibleQuery {
	isHidden: boolean;
}

export const getChatsList = (token: string, query: AllChatsQuery) =>
	get<ITableDataInterface<IChat>>("chats", token, query);

export const getChat = (id: number, token: string) =>
	get<ISelectedChat>(`chats/${id}`, token);

export const chatChangeVisible = (
	id: number,
	query: ChatChangeVisibleQuery,
	token: string
) => post<IChatInterface>(`chats/${id}/change-visible`, token, {}, query);
