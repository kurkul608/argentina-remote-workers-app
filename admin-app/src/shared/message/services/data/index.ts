import { post } from "services/api";
import { IMessageDtoInterface } from "interfaces/dto/message-dto.interface";

export const sendMessage = (token: string, data: IMessageDtoInterface) =>
	post("message", token, data);
