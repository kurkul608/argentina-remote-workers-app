import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../shared/chat-list/redux/chat-list.slice";
import authReducer from "../shared/auth/redux/auth.slice";
import activeChatsReducer from "../shared/chat-list/redux/active-chats.slice";

export const store = configureStore({
	reducer: {
		chats: chatReducer,
		auth: authReducer,
		activeChats: activeChatsReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
