import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IChatsState {
  list: number[];
}

const initialState: IChatsState = {
  list: [1],
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<number>) => {
      state.list.push(action.payload);
    },
    addAllChats: (state, action: PayloadAction<Array<number>>) => {
      state.list = action.payload;
    },
    removeChat: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((chat) => chat !== action.payload);
    },
  },
});

export const { addChat, addAllChats, removeChat } = chatsSlice.actions;

export default chatsSlice.reducer;
