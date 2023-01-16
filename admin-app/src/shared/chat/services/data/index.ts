import { get } from "../../../../services/api";
import { ITableDataInterface } from "../../../../interfaces/dto/table-data.interface";
import { IChatInterface } from "../../../../interfaces/chat.interface";
import axios from "axios";
import { ITestDtoInterface } from "../../../../interfaces/dto/chat-test-dto.interface";
import { IChatInfo } from "../../types";

export const getChatsList = () =>
  get<ITableDataInterface<IChatInterface>>("chats");

export const getChat = (id: number) => get<IChatInfo>(`chats/${id}`);
