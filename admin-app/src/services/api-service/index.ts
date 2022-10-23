import { IUserLogin } from "../../shared/auth-form/redux/auth-form.slice";

export function authRequest({ username }: IUserLogin) {
  console.log(username);
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("asd");
    }, 2000);
  }).then((res) => {
    return {
      login: {
        token: res,
      },
    };
  });
}
