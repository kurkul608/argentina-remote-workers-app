import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IChatInterface } from "../../../../interfaces/chat.interface";
import { getChatsList } from "../../services/data";
import { ITableDataInterface } from "../../../../interfaces/dto/table-data.interface";

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

export const getAllChats = createAsyncThunk("chats/getAllChats", async () => {
	return (await getChatsList()) as ITableDataInterface<IChatInterface>;
});

export const chatsSlice = createSlice({
	name: "chats",
	initialState,
	reducers: {
		addChat: (state, action: PayloadAction<IChatInterface>) => {
			state.list.push(action.payload);
		},
		removeChat: (state, action: PayloadAction<IChatInterface>) => {
			state.list = state.list.filter((chat) => chat !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllChats.fulfilled, (state, action) => {
				state.list = state.list.concat(
					(action.payload?.data as IChatInterface[]) || []
				);
				state.isLoading = false;
			})
			.addCase(getAllChats.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(getAllChats.pending, (state) => {
				state.list = [];
				state.isLoading = true;
			});
	},
});

export const { addChat, removeChat } = chatsSlice.actions;

export default chatsSlice.reducer;
