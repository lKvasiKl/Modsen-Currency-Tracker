const { merge } = require("webpack-merge");

const common = require("../webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 8080,
    historyApiFallback: true,
  },
});
