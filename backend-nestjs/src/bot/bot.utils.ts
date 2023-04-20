export type ChatType = 'group' | 'supergroup' | 'channel' | 'private';

export const isPrivateOrChannel = (chatType: ChatType) => {
  return isChannel(chatType) || chatType === 'private';
};

export const isChannel = (chatType: ChatType) => {
  return chatType === 'channel';
};
export const isPrivate = (chatType: ChatType) => {
  return chatType === 'private';
};
