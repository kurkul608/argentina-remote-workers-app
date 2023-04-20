import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chatChangeVisible, getChat } from "../../services/data";
import { IChat } from "shared/chat/types/chat.interface";
import { fromChatDtoService } from "shared/chat/services/from-chat-dto.service";

interface IChatState {
	chat?: IChat;
	isLoading: boolean;
	error: string;
}

const initialState: IChatState = {
	isLoading: false,
	error: "",
};
interface IChatParams {
	id: number;
	token: string;
}

interface IChangeVisibleParams extends IChatParams {
	isHidden: boolean;
}
export const getChatAsync = createAsyncThunk(
	"chat/getChat",
	async ({ id, token }: IChatParams) => {
		return getChat(id, token);
	}
);
export const changeVisibleAsync = createAsyncThunk(
	"chat/changeVisible",
	async ({ id, token, isHidden }: IChangeVisibleParams) => {
		return chatChangeVisible(id, { isHidden: !isHidden }, token);
	}
);

export const chatSlice = createSlice({
	name: "chat",
	initialState: initialState,
	reducers: {
		clearChat: (state) => {
			state.chat = initialState.chat;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getChatAsync.fulfilled, (state, action) => {
			const response = action.payload.data;
			state.chat = fromChatDtoService(response);
			state.isLoading = false;
		});
		builder.addCase(getChatAsync.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getChatAsync.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string;
		});
		builder.addCase(changeVisibleAsync.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(changeVisibleAsync.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(changeVisibleAsync.fulfilled, (state) => {
			state.chat!.isHidden = !state.chat!.isHidden;
		});
	},
});
export default chatSlice.reducer;
