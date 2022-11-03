import { IChatInterface } from "../../../../interfaces/chat.interface";

export interface IMapped {
  [id: string]: IDropDownList;
}
export interface IDropDownList {
  title: string;
  id: number;
  value: boolean;
}
export function mapper(list: IChatInterface[]) {
  const mappedList: IMapped = {};
  list.map(
    (item) =>
      (mappedList[item.id] = { title: item.title, id: item.id, value: false })
  );
  return mappedList;
}
