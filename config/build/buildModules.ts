import webpack from "webpack";

export function BuildModules(): webpack.ModuleOptions {

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoaderRules = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return {
        rules: [
            tsLoaderRules,
            stylesLoader
        ]
    }
}