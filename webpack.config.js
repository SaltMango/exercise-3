const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/Index.tsx",
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: [/node_modules/, /\.test\.ts$/],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              name: "[name].[ext]",
              outputPath: "fonts/",
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  devServer: {
    port: 4400,
    compress: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
