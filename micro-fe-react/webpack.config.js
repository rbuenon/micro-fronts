module.exports = {
  output: {
    path: __dirname + "/../micro-fe-wrapper/react",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};