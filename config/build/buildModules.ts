import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/configs';

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

  const babelLoaderCode = buildBabelLoader({ ...options, isTSX: false });

  const tsxBabelLoaderCode = buildBabelLoader({ ...options, isTSX: true });

  return {
    rules: [
      stylesLoader,
      svgLoader,
      fileLoader,
      babelLoaderCode,
      tsxBabelLoaderCode,
    ],
  };
}
