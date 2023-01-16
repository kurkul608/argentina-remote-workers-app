import axios from "axios";
import { config } from "./config";

export const instance = axios.create({
  ...config.api,
  headers: { "Content-Type": "application/json" },
});

export const get = async <T>(path: string) => {
  try {
    const chatTableData = await instance.get<T>(path);
    return chatTableData.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const post = async <T, D>(path: string, body: D) => {
  try {
    const chatTableData = await instance.post<T>(path, body);
    return chatTableData.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
};
