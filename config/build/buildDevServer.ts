import {BuildOptions} from "./types/configs";
import type {Configuration as DevServerConf} from "webpack-dev-server";

export function BuildDevServer(options: BuildOptions): DevServerConf {
    const {port} = options

    return {
        port,
        open: true
    }
}