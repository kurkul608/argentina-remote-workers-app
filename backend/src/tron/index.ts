// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TronWeb from "tronweb";

const tronWeb = new TronWeb(
  "https://api.shasta.trongrid.io",
  "https://api.shasta.trongrid.io"
);

export const tronTest = async () => {
  const userBalance = await tronWeb.trx.getBalance(
    "TPt9XjeTHR984qmWejBmEP8MRYcFnUAAAA"
  );
  console.log(`User's balance is: ${userBalance}TRX`);
  console.log(tronWeb.createAccount());
  // tronWeb.createAccount().then((data) => console.log(data));
};
