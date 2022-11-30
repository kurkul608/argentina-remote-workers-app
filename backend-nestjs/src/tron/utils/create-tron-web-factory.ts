import TronWeb from 'tronweb';
export async function CreateTronWebFactory(): Promise<TronWeb<any>> {
  const tronWeb = await new TronWeb(
    'https://api.shasta.trongrid.io',
    'https://api.shasta.trongrid.io',
  );

  return tronWeb;
}
