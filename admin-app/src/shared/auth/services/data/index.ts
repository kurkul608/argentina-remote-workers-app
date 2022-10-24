import { IUserLogin } from "../../redux/auth.slice";

export function authRequest({ username }: IUserLogin) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("asd");
    }, 2000);
  }).then((res) => {
    return {
      login: {
        token: res as string,
      },
    };
  });
}
