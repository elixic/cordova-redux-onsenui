const os = require("os");
const path = require("path");
const HappyPack = require("happypack");
const CopyPlugin = require("copy-webpack-plugin");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length * 2});
const mode = process.env.NODE_ENV === "production"? "production" : "development";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "www"),
    filename: "[name].js",
  },
  devtool: "source-map",
  mode,
  devServer: {
    contentBase: path.join(__dirname, "www"),
    compress: true,
    port: 8080,
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: "happypack/loader?id=ts",
    }, {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
      }, {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, { 
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" 
      }],
  },
  plugins: [
    new HappyPack({
      id: "ts",
      threadPool: happyThreadPool,
      loaders: [{
        path: "ts-loader",
        query: { happyPackMode: true },
      }],
    }),
    new CopyPlugin([
      {from: path.join(__dirname, "public"), to: path.join(__dirname, "www")}
    ])
  ],
}