const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    "mode": "development",
    "entry": ["babel-polyfill", "./src/index.js"],
    "output": {
      "path": path.join(__dirname, '/dist'),
      "filename": "[name].[chunkhash:8].js"
    },
    devServer: {
      contentBase: path.join(__dirname, "dist")
    },
    "devtool": "source-map",
    "module": {
      "rules": [
        {
          "test": /\.(js|jsx)$/,
          "exclude": /node_modules/,
          "use": {
            "loader": "babel-loader",
            "options": {
              "presets": [
                "env",
                "react"
              ],
              "plugins": [
                "transform-regenerator",
                "transform-class-properties",
                "transform-object-rest-spread"
              ]
            }
          }
        },
        {
          "test": /\.s?css$/,
          "use": [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    "plugins": [
      new MiniCssExtractPlugin({
        filename: "[name]-[contenthash:8].css"
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        favicon: './favicon.png'
      })
    ]
  }
};