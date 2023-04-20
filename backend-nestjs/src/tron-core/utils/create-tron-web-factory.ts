import TronWeb from 'tronweb';
import { Mode } from '../../utils/constants/mode';

export async function CreateTronWebFactory(
  mode: Mode = Mode.develop,
): Promise<TronWeb<any>> {
  const tronWeb =
    mode === 'PRODUCTION'
      ? await new TronWeb('https://api.trongrid.io', 'https://api.trongrid.io')
      : await new TronWeb(
          'https://api.shasta.trongrid.io',
          'https://api.shasta.trongrid.io',
        );

  return tronWeb;
}
