import {BuildOptions} from "./types/configs";
import webpack from "webpack";
import {BuildModules} from "./buildModules";
import {BuildResolvers} from "./buildResolvers";
import {BuildPlugins} from "./buildPlugins";

export function BuildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options

    return {
        mode,
        entry: paths.entry,
        module: BuildModules(),
        resolve: BuildResolvers(),
        output: {
            filename: 'bundle.[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: BuildPlugins(paths)
    }
}