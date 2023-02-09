import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth } from "shared/auth/services/checkAuth";

export interface IAuth {
	token?: string | null;
	status: "loading" | "fulfilled" | "rejected";
	isExpired: boolean;
}

export const initialState: IAuth = {
	status: "loading",
	isExpired: false,
};

interface IErrorAuthMessage {
	message: string;
	statusCode: number;
}

export const checkAuthAsync = createAsyncThunk(
	"auth/check",
	async (token: string) => {
		return (await checkAuth(token)) as IErrorAuthMessage | boolean;
	}
);

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
	extraReducers: (builder) => {
		builder.addCase(checkAuthAsync.fulfilled, (state, action) => {
			if (typeof action.payload === "boolean") {
				state.isExpired = false;
			} else {
				state.isExpired = true;
				state.token = undefined;
			}
		});
	},
});

export const { logOut, logIn } = AuthSlice.actions;
export default AuthSlice.reducer;
