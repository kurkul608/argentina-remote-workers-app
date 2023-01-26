import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
	token?: string | null;
	status: "loading" | "fulfilled" | "rejected";
}

export const initialState: IAuth = {
	status: "loading",
};

const AuthSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		logIn: (state, action: PayloadAction<string | undefined | null>) => {
			state.token = action.payload;
		},
		logOut: (state) => {
			state.token = undefined;
		},
	},
});

export const { logOut, logIn } = AuthSlice.actions;
export default AuthSlice.reducer;
