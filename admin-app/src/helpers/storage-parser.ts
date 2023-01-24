import { IAuth } from "shared/auth/redux/auth.slice";

export const storageParser = (key: string): string => {
	const localData = localStorage.getItem(key);
	return localData ?? "";
};

export const getAuthToken = ({ token }: IAuth) => {
	return token;
};
