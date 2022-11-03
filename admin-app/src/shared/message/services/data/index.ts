import { post } from "../../../../services/api";
import { IMessageDtoInterface } from "../../../../interfaces/dto/message-dto.interface";

export const sendMessage = (data: IMessageDtoInterface) =>
  post("message", data);
