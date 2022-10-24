import { get } from "../../../../services/api";
import { ITableDataInterface } from "../../../../interfaces/dto/table-data.interface";
import { IChatInterface } from "../../../../interfaces/chat.interface";

export const getChatsList = () =>
  get<ITableDataInterface<IChatInterface>>("v1/chat");
