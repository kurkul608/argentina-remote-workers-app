import { get } from "services/api";
import { getAuthToken } from "helpers/storage-parser";

export const getBotToken = () => get<string>("bot", getAuthToken());
