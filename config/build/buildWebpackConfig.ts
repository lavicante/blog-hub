import { BuildOptions } from "./types/configs";
import webpack from "webpack";
import { BuildModules } from "./buildModules";
import { BuildResolvers } from "./buildResolvers";
import { BuildPlugins } from "./buildPlugins";
import { BuildDevServer } from "./buildDevServer";

export function BuildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    module: BuildModules(options),
    resolve: BuildResolvers(options),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: BuildPlugins(paths, options),
    devServer: isDev ? BuildDevServer(options) : undefined,
  };
}
