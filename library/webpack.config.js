var path = require('path');
var ES3Plugin = require('webpack-es3-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: ['./src/main.ts'],
  devtool: 'source-map', // use 'eval-cheap-source-map' for chrome
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.m?js$/,
        exclude: [/(node_modules|bower_components)/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', { loose: true, modules: 'commonjs' }],
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
