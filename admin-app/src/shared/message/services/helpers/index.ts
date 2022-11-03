import { IChatInterface } from "../../../../interfaces/chat.interface";
import { IMapped } from "../../components/send-message-widget";

export function mapper(list: IChatInterface[]) {
  const mappedList: IMapped = {};
  list.map((item) => (mappedList[item.id] = item.title));
  return mappedList;
}
