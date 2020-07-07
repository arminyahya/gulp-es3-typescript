var path = require('path')
var ES3Plugin = require('webpack-es3-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  entry: ['./src/index.ts'],
  devtool: 'source-map', // use 'eval-cheap-source-map' for chrome
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.m?js$/,
        include: [path.resolve(__dirname, 'dist')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']],
            plugins: ['babel-plugin-transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [new ES3Plugin(), new MinifyPlugin()],

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'lib',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
}
