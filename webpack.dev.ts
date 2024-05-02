import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { Configuration } from "webpack";
import commonConfig from "./webpack.common";

const devServer: DevServerConfiguration = {
  port: 3000,
};

const config: Configuration = {
  mode: "development",
  ...commonConfig,
  devServer,
};

export default config;
