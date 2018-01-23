const { resolve, join } = require('path')
const pkg = require('./package.json')

const config = {
  devtool: 'eval',
  entry: resolve(__dirname, 'src/main.ts'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'lib.js',
    libraryTarget: "umd",
    library: pkg.libraryConfig.name
  },
  resolve: {
    extensions: ['.json', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.json$/, loader: 'json-loader', include: /package.json/ },
      { test: /\.ts$/, loader: 'ts-loader' },
    ]
  },
  devServer: {
    contentBase: [join(__dirname, "dist"), join(__dirname, "static")],
    compress: true,
    port: 9000
  }
}

module.exports = config