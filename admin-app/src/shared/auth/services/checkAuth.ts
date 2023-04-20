import { post } from "services/api";

export type checkAuthType = boolean;

export const checkAuth = (token: string) =>
	post<checkAuthType>({ path: "auth/check", authToken: token });
