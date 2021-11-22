const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const PORT = 3001;
const deps = require("./package.json").dependencies;

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    port: PORT,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header.js",
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: deps["react-dom"],
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      manifest: "./public/manifest.json",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
    }),
  ],
};
