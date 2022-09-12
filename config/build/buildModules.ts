import webpack from "webpack";

export function BuildModules (): webpack.ModuleOptions {

    const tsLoaderRules =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

     return {
         rules: [
             tsLoaderRules
         ]
     }
}