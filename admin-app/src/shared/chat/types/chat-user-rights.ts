export interface UserRights {
	admin: UserRightsAdmin;
	allowChatAdminCallCommands: false;
	members: UserRightsMembers;
}

export interface UserRightsAdmin {
	adminList: string[];
	allowChatAdminCallCommands: boolean;
}

export interface UserRightsMembers {
	changeBotSettingsAllowedList: [];
	useBotCommandsList: [];
	notAffectByRulesList: [];
}
