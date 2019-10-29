const HtmlWepPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/app.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader?name=/images/[name].[ext]',
          },
        ],
      },
      {
          test:/\.scss$/,
          use:[
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
      }
    ]
  },
  plugins: [
    new HtmlWepPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
        filename:"[name].css",
        chunkFilename:"[id].css"
    })
  ]
};
