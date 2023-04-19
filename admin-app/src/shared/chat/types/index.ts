//
// export interface Permissions {
// 	can_send_messages: boolean;
// 	can_send_media_messages: boolean;
// 	can_send_polls: boolean;
// 	can_send_other_messages: boolean;
// 	can_add_web_page_previews: boolean;
// 	can_change_info: boolean;
// 	can_invite_users: boolean;
// 	can_pin_messages: boolean;
// 	can_manage_topics: boolean;
// }
//
// export interface ExtraPermissions extends Permissions {
// 	can_send_audios: boolean;
// 	can_send_documents: boolean;
// 	can_send_photos: boolean;
// 	can_send_videos: boolean;
// 	can_send_video_notes: boolean;
// 	can_send_voice_notes: boolean;
// }
//
// export interface Photo {
// 	small_file_id: string;
// 	small_file_unique_id: string;
// 	big_file_id: string;
// 	big_file_unique_id: string;
// }
//
// export interface From {
// 	id: number;
// 	is_bot: boolean;
// 	first_name: string;
// 	username: string;
// }
//
// export interface Chat {
// 	id: number;
// 	title: string;
// 	type: string;
// 	isHidden: boolean;
// }
//
// export interface PinnedMessage {
// 	message_id: number;
// 	from: From;
// 	chat: Chat;
// 	date: number;
// 	text: string;
// }
//
// export interface ChatInfo {
// 	id: number;
// 	title: string;
// 	type: string;
// 	invite_link?: string;
// 	permissions: Permissions;
// 	join_to_send_messages: boolean;
// 	photo?: Photo;
// 	pinned_message?: PinnedMessage;
// }
//
// export interface ExtraChatInfo extends ChatInfo {
// 	permissions: ExtraPermissions;
// }
//
// export interface IChatInfo {
// 	chat: Chat;
// 	photos: IChatPhotos;
// 	chatInfo: ExtraChatInfo;
// 	chatMembersCount: number;
// }
//
// export interface ISelectedChat extends IChatInfo {
// 	payments: [];
// }
