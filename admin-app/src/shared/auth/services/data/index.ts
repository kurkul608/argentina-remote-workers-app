import { IUserLogin } from "../../redux/auth.slice";
import { get } from "../../../../services/api";

export const getBotToken = () => get<string>("bot");
