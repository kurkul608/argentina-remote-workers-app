import { get } from "../../../../services/api";

export const getBotToken = () => get<string>("bot");
