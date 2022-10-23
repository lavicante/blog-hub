import webpack from 'webpack';

import { BuildOptions } from './types/configs';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function BuildModules(options: BuildOptions): webpack.ModuleOptions {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const stylesLoader = buildCssLoaders(options.isDev);

  const tsLoaderRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  return {
    rules: [tsLoaderRules, stylesLoader, svgLoader, fileLoader, babelLoader],
  };
}
