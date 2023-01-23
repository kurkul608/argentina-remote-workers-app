import { useAppSelector } from "redux/hooks";

export const storageParser = (key: string): string => {
	const localData = localStorage.getItem(key);
	return localData ?? "";
};

export const getAuthToken = (): string => {
	const { token } = useAppSelector((state) => state.auth);
	const localData = storageParser("auth");
	return localData ?? token ?? "";
};
