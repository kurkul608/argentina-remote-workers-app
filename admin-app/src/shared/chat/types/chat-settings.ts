import { UserRights } from "shared/chat/types/chat-user-rights";

export interface ChatSettings {
	allowChatAdminCallCommands: boolean;
	userRights: UserRights;
	greetings: Greetings;
}

export interface Greetings {
	message: [];
	systemMessages: "";
	leftMembers: "";
	misc: "";
}
