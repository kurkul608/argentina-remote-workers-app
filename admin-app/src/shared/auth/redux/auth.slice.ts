import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IAuth {
	token: string;
	status: "loading" | "fulfilled" | "rejected";
}

export interface IUserLogin {
	username: string;
}

export const initialState: IAuth = {
	token: "",
	status: "loading",
};

// export const authAsync = createAsyncThunk(
//   "user/auth",
//   async (params: IUserLogin) => {
//     return await authRequest(params);
//   }
// );

const AuthSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		logOut: (state) => {
			state.token = "";
		},
	},
	extraReducers: (builder) => {
		// builder.addCase(authAsync.pending, (state) => {
		//   state.status = "loading";
		// });
		// builder.addCase(authAsync.rejected, (state) => {
		//   state.status = "rejected";
		// });
		// builder.addCase(authAsync.fulfilled, (state, action) => {
		//   state.token = action.payload.login.token;
		//   state.status = "fulfilled";
		// });
	},
});

export const { logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
