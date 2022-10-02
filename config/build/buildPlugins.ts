import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildOptions, BuildPaths } from "./types/configs";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function BuildPlugins(
  paths: BuildPaths,
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
    }),
  ];
}
