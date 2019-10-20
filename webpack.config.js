const webpack = require("webpack");
const path = require("path");

const config = {
  devtool: process.env.NODE_ENV === "production" ? false : "eval-source-map",
  entry: [
    "eventsource-polyfill", // necessary for hot reloading with IE
    "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
    //.path.resolve(__dirname, 'src/index')
    "./index.js"
  ],
  output: {
    path: path.resolve(__dirname, "chart"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    //new webpack.NoErrorsPlugin()
    //extractSass
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};

module.exports = config;
