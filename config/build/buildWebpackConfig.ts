import webpack from 'webpack';

import { BuildDevServer } from './buildDevServer';
import { BuildModules } from './buildModules';
import { BuildPlugins } from './buildPlugins';
import { BuildResolvers } from './buildResolvers';
import { BuildOptions } from './types/configs';

export function BuildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    module: BuildModules(options),
    resolve: BuildResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: BuildPlugins(paths, options),
    devServer: isDev ? BuildDevServer(options) : undefined,
  };
}
