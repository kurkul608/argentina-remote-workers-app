import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getChatsList } from "../../services/data";
import { Limits } from "constants/limits";
import { IChat } from "shared/chat/interfaces/chat.interface";
import { fromChatDtoService } from "shared/chat/services/from-chat-dto.service";

interface IChatsState {
	list: IChat[];
	isLoading: boolean;
	error: string;
	total: number;
	page: number;
	hasMore: boolean;
}

const initialState: IChatsState = {
	list: [],
	total: 0,
	isLoading: false,
	error: "",
	page: 0,
	hasMore: false,
};

export interface GetAllChatsParams {
	page: number;
	limit: number;
	forceClear?: boolean;
}
export interface IGetAllChats {
	token: string;
	params: GetAllChatsParams;
}
export const getAllChats = createAsyncThunk(
	"chats/getAllChats",
	async ({ token, params }: IGetAllChats) => {
		const { page, limit } = params;
		return getChatsList(token, {
			limit: limit,
			offset: page * limit,
		});
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
				const response = action.payload.data;
				state.list = state.list.concat(
					response.data.map((dto) => fromChatDtoService(dto))
				);
				state.total = response.total;
				state.hasMore = state.page * Limits.chatsPerPage < state.total;
				state.isLoading = false;
			})
			.addCase(getAllChats.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			})
			.addCase(getAllChats.pending, (state, action) => {
				state.list = action.meta.arg.params?.forceClear ? [] : state.list;
				state.page = action.meta.arg.params.page + 1;
				state.isLoading = true;
			});
	},
});

export const { addChat, removeChat } = chatsSlice.actions;

export default chatsSlice.reducer;
