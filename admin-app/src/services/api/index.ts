import axios from "axios";
import { config } from "./config";

export const instance = axios.create({
	...config.api,
	headers: {
		"Content-Type": "application/json",
	},
});
instance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		error.response.status === 401 && localStorage.removeItem("auth");
		error.response.status === 401 && location.reload();
	}
);
export const get = async <T, D = any>(
	path: string,
	authToken: string,
	query?: D
) => {
	return instance.get<T>(path, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
		params: query,
	});
};
interface IParams<D, P> {
	path: string;
	authToken: string;
	body?: D;
	query?: P;
}
export const post = async <T>({
	authToken,
	query,
	body,
	path,
}: IParams<any, any>) => {
	return instance.post<T>(path, body, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
		params: query,
	});
};
