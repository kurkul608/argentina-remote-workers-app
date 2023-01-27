export const localStorageServiceGet = (key: string) => {
	return localStorage.getItem(key) || undefined;
};
export const localStorageServiceSet = (key: string, value: string) => {
	localStorage.setItem(key, value);
};
export const localStorageServiceRemove = (key: string) => {
	localStorage.removeItem(key);
};
