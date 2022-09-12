const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("The current path is:", path.resolve(__dirname));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
  },
  plugins: [
    new MiniCssExtractPlugin() // default will be main.css
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
      static: {
          directory: path.join(__dirname),
      },
      port: 8080,
  },
};