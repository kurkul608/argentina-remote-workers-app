import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSettings } from "shared/chat/types/chat-settings";

export type configSettings = Pick<ChatSettings, "userRights">;

const initialState: configSettings["userRights"] = {
	adminList: [],
	changeBotSettingsAllowedList: [],
	allowChatAdminCallCommands: false,
	notAffectByRulesList: [],
	useBotCommandsList: [],
};

export const userRightsSlice = createSlice({
	name: "chat/settings/userRights",
	initialState,
	reducers: {
		addAdmin: (state, action: PayloadAction<string>) => {
			state.adminList.push(action.payload);
		},
		removeAdmin: (state, action: PayloadAction<string>) => {
			state.adminList.filter((username) => username !== action.payload);
		},
		addBotAdmin: (state, action: PayloadAction<string>) => {
			if (state.changeBotSettingsAllowedList)
				state.changeBotSettingsAllowedList.push(action.payload);
		},
		removeBotAdmin: (state, action: PayloadAction<string>) => {
			if (state.changeBotSettingsAllowedList)
				state.changeBotSettingsAllowedList.filter(
					(username) => username !== action.payload
				);
		},
		addCommandListUser: (state, action: PayloadAction<string>) => {
			if (state.notAffectByRulesList)
				state.notAffectByRulesList.push(action.payload);
		},
		removeCommandListUser: (state, action: PayloadAction<string>) => {
			if (state.notAffectByRulesList)
				state.notAffectByRulesList.filter(
					(username) => username !== action.payload
				);
		},
	},
});

export const {
	addAdmin,
	removeAdmin,
	addBotAdmin,
	removeBotAdmin,
	addCommandListUser,
	removeCommandListUser,
} = userRightsSlice.actions;

export default userRightsSlice.reducer;
