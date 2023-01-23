import { IChatInfo } from "../../types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getChat } from "../../services/data";

interface IChatState {
	data: IChatInfo;
	isLoading: boolean;
	error: string;
}

const initialState: IChatState = {
	data: {
		chatInfo: {
			id: -5213,
			title: "test",
			type: "supergroup",
			invite_link: "https://t.me/+dWlI-E31e2djOGYy",
			permissions: {
				can_send_messages: true,
				can_send_media_messages: true,
				can_send_polls: true,
				can_send_other_messages: true,
				can_add_web_page_previews: true,
				can_change_info: true,
				can_invite_users: true,
				can_pin_messages: true,
				can_manage_topics: true,
			},
			join_to_send_messages: true,
			photo: {
				small_file_id: "AQADAgADAcAxG2VwwEoACAIAAyhrZMcW____-hsdxvmaYlUtBA",
				small_file_unique_id: "AQADAcAxG2VwwEoAAQ",
				big_file_id: "AQADAgADAcAxG2VwwEoACAMAAyhrZMcW____-hsdxvmaYlUtBA",
				big_file_unique_id: "AQADAcAxG2VwwEoB",
			},
			pinned_message: {
				message_id: 56,
				from: {
					id: 5553023967,
					is_bot: true,
					first_name: "Argentinets bot",
					username: "cyka_ya_tyt_bot",
				},
				chat: {
					id: -1001677100248,
					title: "Боты Аргентинцы",
					type: "supergroup",
				},
				date: 1667459209,
				text: "23",
			},
		},
		chatMembersCount: 2,
	},
	isLoading: false,
	error: "",
};
interface IChatProps {
	id: number;
	token: string;
}
export const getChatAsync = createAsyncThunk(
	"chat/getChat",
	async ({ id, token }: IChatProps) => {
		return (await getChat(id, token)) as IChatInfo;
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
		builder.addCase(getChatAsync.fulfilled, (state, action) => {
			state.data = action.payload as IChatInfo;
			state.isLoading = false;
		});
		builder.addCase(getChatAsync.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getChatAsync.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string;
		});
	},
});
export default chatSlice.reducer;
