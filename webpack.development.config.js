const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
  mode: 'development',
  watch: mode === "development",
  entry: ["./src/index.ts", "webpack-plugin-serve/client"],
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
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
  plugins: [
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
    }),
  ]
};