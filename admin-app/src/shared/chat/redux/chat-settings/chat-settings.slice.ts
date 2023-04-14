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
		userRights: {
			adminList: [],
			changeBotSettingsAllowedList: [],
			allowChatAdminCallCommands: false,
			notAffectByRulesList: [],
			useBotCommandsList: [],
		},
		greetings: {
			message: [],
			misc: false,
			leftMembers: false,
			systemMessages: false,
		},
		moderation: {
			rulesMessage: [],
			newcomers: {
				chatTimeout: {
					countTime: 0,
					time: "minute",
				},
				timeToChangeUsername: {
					countTime: 0,
					time: "minute",
				},
			},
			security: {
				faceControlUsers: false,
				faceControlMaxNumbersWarning: 2,
				faceControlUsernameMinLength: 0,
				faceControlUsernameSubstringList: [],
				faceControlBanMessage: "",
				faceControlBanTime: {
					countTime: 0,
					time: "minute",
				},
				faceControlPreventRTL: false,
				faceControlPreventHieroglyphs: false,
				faceControlUserLoginControl: false,
				faceControlRTLPercent: 0,
				faceControlHieroglyphsPercent: 0,
				faceControlUsernameMaxLength: 20,
				faceControlBreakingUsername: false,
				faceControlBanType: "no",
				faceControlCheckTimeout: {
					countTime: 0,
					time: "minute",
				},
				faceControlSubscriptionChannels: [],
			},
			report: {
				reportIsEnable: false,
				additionalUserNotificationList: false,
				deleteReportMessage: false,
				reportReportOnAdmins: false,
				notifyAdmins: false,
			},
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
			let obj: WritableDraft<any> = state.config;
			const fieldPath = action.payload.field.split(".");
			for (let i = 0; i < fieldPath.length - 1; i++) {
				obj = obj[fieldPath[i]];
			}
			obj[fieldPath[fieldPath.length - 1]] = action.payload.value;
		},
		// addAdmin: (state, action: PayloadAction<string>) => {
		// 	state.config.userRights.adminList.push(action.payload);
		// },
		// removeAdmin: (state, action: PayloadAction<string>) => {
		// 	state.config.userRights.adminList.filter(
		// 		(username) => username !== action.payload
		// 	);
		// },
		// addBotAdmin: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.changeBotSettingsAllowedList)
		// 		state.config.userRights.changeBotSettingsAllowedList.push(
		// 			action.payload
		// 		);
		// },
		// removeBotAdmin: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.changeBotSettingsAllowedList)
		// 		state.config.userRights.changeBotSettingsAllowedList.filter(
		// 			(username) => username !== action.payload
		// 		);
		// },
		// addCommandListUser: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.notAffectByRulesList)
		// 		state.config.userRights.notAffectByRulesList.push(action.payload);
		// },
		// removeCommandListUser: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.notAffectByRulesList)
		// 		state.config.userRights.notAffectByRulesList.filter(
		// 			(username) => username !== action.payload
		// 		);
		// },
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
