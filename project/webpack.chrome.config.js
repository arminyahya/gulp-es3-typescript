var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
	entry: ["./src/main.ts"],
	devtool: "source-map", // use 'eval-cheap-source-map' for chrome
	mode: "development",
	devServer: {
		contentBase: "./public",
		watchContentBase: true,
		open: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)$/,
				use: "ts-loader",
				exclude: [/node_modules/],
			},
			{
				test: /\.css$/i,
				use: ["css-loader"],
			},
		],
	},

	resolve: {
		modules: ["node_modules", "src"],
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "public"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index-for-chrome.html",
		}),
	],
};
