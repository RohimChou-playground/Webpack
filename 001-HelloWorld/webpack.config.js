const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log("The current path is:", path.resolve(__dirname, 'src'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
  },
  plugins: [
    new MiniCssExtractPlugin(), // default will be main.css
    new CopyWebpackPlugin({
      patterns:[{
        from: path.resolve(__dirname, 'src/aaa'), 
        to: path.resolve(__dirname, 'dist/aaa')
      }]
    }),
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