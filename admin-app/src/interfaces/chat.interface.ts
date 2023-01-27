export interface IChatInterface {
	id: number;
	title: string;
	type: string;
}

export interface IChatInfoInterface {
	all_members_are_administrators: boolean;
	id: number;
	permissions: {
		can_add_web_page_previews: boolean;
		can_change_info: boolean;
		can_invite_users: boolean;
		can_manage_topics: boolean;
		can_pin_messages: boolean;
		can_send_media_messages: boolean;
		can_send_messages: boolean;
		can_send_other_messages: boolean;
		can_send_polls: boolean;
	};
	title: string;
	type: string;
}

export interface IChatPhotos {
	[x: string]: any;
}

export interface IChat {
	chat: IChatInterface;
	chatInfo: IChatInfoInterface;
	chatMembersCount: number;
	photos: IChatPhotos;
}
