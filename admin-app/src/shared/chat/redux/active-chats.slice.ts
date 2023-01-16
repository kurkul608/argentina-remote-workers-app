import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChatInterface } from "../../../interfaces/chat.interface";

interface IChatsState {
  list: IChatInterface[];
  isLoading: boolean;
  error: string;
}

const initialState: IChatsState = {
  list: [],
  isLoading: false,
  error: "",
};

export const activeChat = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addActiveChat: (state, action: PayloadAction<IChatInterface>) => {
      state.list.push(action.payload);
    },
    removeActiveChat: (state, action: PayloadAction<IChatInterface>) => {
      state.list = state.list.filter((chat) => chat !== action.payload);
    },
  },
});

export const { removeActiveChat, addActiveChat } = activeChat.actions;

export default activeChat.reducer;
