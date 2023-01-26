import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IChat } from "interfaces/chat.interface";
import { getChatsList } from "../../services/data";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";

interface IChatsState {
	list: IChat[];
	isLoading: boolean;
	error: string;
}

const initialState: IChatsState = {
	list: [],
	isLoading: false,
	error: "",
};

export interface GetAllChatsParams {
	offset: number;
	limit: number;
}
export interface IGetAllChats {
	token: string;
	query: GetAllChatsParams;
}
export const getAllChats = createAsyncThunk(
	"chats/getAllChats",
	async ({ token, query }: IGetAllChats) => {
		return (await getChatsList(token, query)) as ITableDataInterface<IChat>;
	}
);

export const chatsSlice = createSlice({
	name: "chats",
	initialState,
	reducers: {
		addChat: (state, action: PayloadAction<IChat>) => {
			state.list.push(action.payload);
		},
		removeChat: (state, action: PayloadAction<IChat>) => {
			state.list = state.list.filter((chat) => chat !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllChats.fulfilled, (state, action) => {
				state.list = state.list.concat((action.payload?.data as IChat[]) || []);
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
