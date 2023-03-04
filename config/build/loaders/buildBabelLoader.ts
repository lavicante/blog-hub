import { BuildOptions } from '../types/configs';

interface BuildBabelLoader extends BuildOptions {
  isTSX?: boolean;
}

export const buildBabelLoader = ({ isTSX }: BuildBabelLoader) => ({
  test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-typescript', { isTSX }],
        '@babel/plugin-transform-runtime',
      ],
    },
  },
});
