import { get } from "services/api";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IChat } from "interfaces/chat.interface";
import { IChatInfo } from "../../types";
import { GetAllChatsParams } from "shared/chat/redux/chat-page/chat-list.slice";

export const getChatsList = (token: string, query: GetAllChatsParams) =>
	get<ITableDataInterface<IChat>>("chats", token, query);

export const getChat = (id: number, token: string) =>
	get<IChatInfo>(`chats/${id}`, token);
