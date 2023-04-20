import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatReducer from "../shared/chat/redux/chat-page/chat-list.slice";
import authReducer from "../shared/auth/redux/auth.slice";
import chatInfoReducer from "../shared/chat/redux/chat-info-page/chat.slice";
import chatSettingsUserRights from "shared/chat/redux/chat-settings/user-rights.slice";
import chatSettingsReducer from "../shared/chat/redux/chat-settings/chat-settings.slice";
export const store = configureStore({
	reducer: {
		chats: chatReducer,
		auth: authReducer,
		chat: chatInfoReducer,
		chatSettings: combineReducers({
			chatSettingsUserRights,
			chatSettingsReducer,
		}),
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;
