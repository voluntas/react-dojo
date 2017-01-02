module.exports = {
    devtool: "eval",
    entry: {
        js: "./src/app.js",
        html: "./index.html"
    },
    output: {
      path: __dirname + "/dist",
      filename: "./bundle.js"
    },
    module: {
      preLoaders: [
          {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
      ],
      loaders: [
          {
              // file-loader を利用している
              test: /\.html$/,
              loader: "file?name=[name].[ext]"
          },
          {
              test: /\.js$/,
              loader: "babel-loader",
              exclude: /node_modules/,
              query: {
                  presets: ["es2015", "react"],
                  plugins: ["transform-flow-strip-types"]
              }
          }
      ]
    },
    eslint: {
        configFile: '.eslintrc.js'
    }
};
