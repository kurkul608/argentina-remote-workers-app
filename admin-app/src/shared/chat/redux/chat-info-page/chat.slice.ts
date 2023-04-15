import { ISelectedChat } from "shared/chat/types/chat-types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chatChangeVisible, getChat } from "../../services/data";
import { IChatInterface } from "interfaces/chat.interface";

interface IChatState {
	data: ISelectedChat;
	isLoading: boolean;
	error: string;
}

const initialState: IChatState = {
	data: {
		chat: { id: 1, type: "test", title: "test", isHidden: false },
		photos: {},
		chatInfo: {
			id: 1,
			join_to_send_messages: true,
			type: "group",
			title: "test",
			permissions: {
				can_send_messages: true,
				can_send_media_messages: true,
				can_send_audios: true,
				can_send_documents: true,
				can_send_photos: true,
				can_send_videos: true,
				can_send_video_notes: true,
				can_send_voice_notes: true,
				can_send_polls: true,
				can_send_other_messages: true,
				can_add_web_page_previews: true,
				can_change_info: true,
				can_invite_users: true,
				can_pin_messages: true,
				can_manage_topics: true,
			},
		},
		chatMembersCount: 0,
		payments: [],
	},
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
		return (await getChat(id, token)) as ISelectedChat;
	}
);
export const changeVisibleAsync = createAsyncThunk(
	"chat/changeVisible",
	async ({ id, token, isHidden }: IChangeVisibleParams) => {
		return (await chatChangeVisible(
			id,
			{ isHidden: !isHidden },
			token
		)) as IChatInterface;
	}
);

export const chatSlice = createSlice({
	name: "chat",
	initialState: initialState,
	reducers: {
		clearChat: (state) => {
			state.data = initialState.data;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			getChatAsync.fulfilled,
			(state, action: PayloadAction<ISelectedChat>) => {
				state.data = action.payload;
				state.isLoading = false;
			}
		);
		builder.addCase(getChatAsync.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getChatAsync.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string;
		});
		builder.addCase(changeVisibleAsync.fulfilled, (state) => {
			state.data.chat.isHidden = !state.data.chat.isHidden;
		});
	},
});
export default chatSlice.reducer;
