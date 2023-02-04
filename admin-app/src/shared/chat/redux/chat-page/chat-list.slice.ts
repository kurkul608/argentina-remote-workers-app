import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IChat } from "interfaces/chat.interface";
import { getChatsList } from "../../services/data";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { Limits } from "constants/limits";

const CHATS_LIMIT = Limits.chatsPerPage;

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
		return (await getChatsList(token, {
			limit: limit,
			offset: page * limit,
		})) as ITableDataInterface<IChat>;
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
				state.total = action.payload.total;
				state.hasMore = state.page * CHATS_LIMIT < state.total;
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
