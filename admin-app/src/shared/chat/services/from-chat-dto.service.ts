import { IChatDto } from "shared/chat/interfaces/chat-dto.interface";
import { IChat } from "shared/chat/interfaces/chat.interface";

export const fromChatDtoService = (dto: IChatDto): IChat => ({
	isHidden: dto.is_hidden,
	tgChatInfo: {
		chatInfo: dto.tg_chat_info.chat_info,
		chatMembersCount: dto.tg_chat_info.chat_members_count,
		photos: dto.tg_chat_info.photos,
	},
	_id: dto._id,
});
