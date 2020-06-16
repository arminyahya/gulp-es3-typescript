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
            presets: [
              [
                '@babel/preset-env',
                // {
                //   targets: {
                //     ie: '5',
                //   },
                // },
              ],
            ],
            plugins: ['babel-plugin-transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new ES3Plugin(),
    new MinifyPlugin({
      // booleans: false,
      // builtIns: false,
      // consecutiveAdds: false,
      // deadcode: false,
      // evaluate: false,
      // flipComparisons: false,
      // guards: false,
      // infinity: false,
      mangle: false,
      // memberExpressions: false,
      // mergeVars: false,
      // numericLiterals: false,
      // propertyLiterals: false,
      // regexpConstructors: false,
      // removeConsole: true,
      // removeDebugger: true,
      // removeUndefined: false,
      // replace: false,
      // simplify: false,
      // simplifyComparisons: false,
      // typeConstructors: false,
      // undefinedToVoid: false,
    }),
  ],

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
