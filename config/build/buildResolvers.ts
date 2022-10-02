import webpack from 'webpack';
import { BuildOptions } from './types/configs';

export function BuildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {},
  };
}
