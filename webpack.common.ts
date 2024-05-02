import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackTagsPlugin from "html-webpack-tags-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const commonConfig: Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/css",
          to: "assets/css",
        },
        { from: "./src/assets/fonts", to: "assets/fonts" },
        { from: "./src/assets/images", to: "assets/images" },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "EQ",
      favicon: "./src/assets/favicon.ico",
      template: "./src/template/index.html",
    }),
    new HtmlWebpackTagsPlugin({
      tags: [
        "./assets/fonts/roboto.css",
        "./assets/fonts/razerf5.css",
        "./assets/css/main.css",
        "./assets/css/tooltip.css",
        "./assets/css/profile.css",
      ],
      append: true,
    }),
  ],
};

export default commonConfig;
