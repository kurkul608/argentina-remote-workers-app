import { get } from "services/api";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IChatInterface } from "interfaces/chat.interface";
import { IChatInfo } from "../../types";

export const getChatsList = (token: string) =>
	get<ITableDataInterface<IChatInterface>>("chats", token);

export const getChat = (id: number, token: string) =>
	get<IChatInfo>(`chats/${id}`, token);
