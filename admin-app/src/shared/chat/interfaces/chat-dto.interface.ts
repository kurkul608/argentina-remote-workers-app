import * as tt from "typegram";

export interface IChatDto {
	_id: string;
	tg_chat_info: {
		chat_info: tt.ChatFromGetChat;
		chat_members_count: number;
		photos: {
			small?: string;
			big?: string;
		};
	};
	is_hidden: boolean;
}
