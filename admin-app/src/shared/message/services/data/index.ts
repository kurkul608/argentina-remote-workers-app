import { post } from "../../../../services/api";
import { IMessageDtoInterface } from "../../../../interfaces/dto/message-dto.interface";

export const sendMessage = (data: IMessageDtoInterface) =>
  post("v1/message", data);
