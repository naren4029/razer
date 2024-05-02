import { Configuration } from "webpack";
import commonConfig from "./webpack.common";

const config: Configuration = {
  mode: "production",
  ...commonConfig,
};

export default config;
