const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
    mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  entry: ["./src/app", "webpack-plugin-serve/client"],
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
    }),
  ]
};