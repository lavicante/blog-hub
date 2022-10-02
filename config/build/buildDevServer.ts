import type { Configuration as DevServerConf } from 'webpack-dev-server';

import { BuildOptions } from './types/configs';

export function BuildDevServer(options: BuildOptions): DevServerConf {
  const { port } = options;

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
