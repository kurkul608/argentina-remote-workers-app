import * as tt from "typegram";

export interface IChat {
	_id: string;
	tgChatInfo: {
		chatInfo: tt.ChatFromGetChat & { title: string };
		chatMembersCount: number;
		photos: {
			small?: string;
			big?: string;
		};
	};
	isHidden: boolean;
}
