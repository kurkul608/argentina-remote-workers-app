import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSettings } from "shared/chat/types/chat-settings";
import { getSettings } from "shared/chat/services/data";
import { WritableDraft } from "immer/dist/types/types-external";

export interface IChatSettings {
	config: ChatSettings;
}
export interface GetChatAsyncParams {
	token: string;
	id: number;
}
export const getChatSettingsAsync = createAsyncThunk(
	"chats/getSettings",
	async ({ token, id }: GetChatAsyncParams) => {
		return (await getSettings(id, token)) as ChatSettings;
	}
);

const initialState: IChatSettings = {
	config: {
		allowChatAdminCallCommands: false,
		userRights: {
			allowChatAdminCallCommands: false,
			admin: {
				adminList: [],
				allowChatAdminCallCommands: false,
			},
			members: {
				changeBotSettingsAllowedList: [],
				useBotCommandsList: [],
				notAffectByRulesList: [],
			},
		},
		greetings: {
			message: [],
			misc: "",
			leftMembers: "",
			systemMessages: "",
		},
	},
};

export const chatSettingsSlice = createSlice({
	name: "chat/settings",
	initialState,
	reducers: {
		setDefault: (state) => {
			state.config = initialState.config;
		},
		updateToggleFiled: (
			state,
			action: PayloadAction<{ field: string; value: boolean }>
		) => {
			const fieldParts = action.payload.field.split(".");
			let nestedObj: WritableDraft<any> = state.config;
			for (let i = 0; i < fieldParts.length - 1; i++) {
				nestedObj = nestedObj[fieldParts[i]];
			}
			nestedObj[fieldParts[fieldParts.length - 1]] = action.payload.value;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			getChatSettingsAsync.fulfilled,
			(state, action: PayloadAction<ChatSettings>) => {
				state.config = action.payload;
			}
		);
	},
});

export const { setDefault, updateToggleFiled } = chatSettingsSlice.actions;

export default chatSettingsSlice.reducer;
