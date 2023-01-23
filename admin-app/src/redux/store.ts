import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../shared/chat/redux/chat-page/chat-list.slice";
import authReducer from "../shared/auth/redux/auth.slice";
import hiddenChatsReducer from "shared/chat/redux/hidden-chats.slice";
import chatInfoReducer from "../shared/chat/redux/settings-page/chat.slice";

export const store = configureStore({
	reducer: {
		chats: chatReducer,
		auth: authReducer,
		hiddenChats: hiddenChatsReducer,
		chat: chatInfoReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
