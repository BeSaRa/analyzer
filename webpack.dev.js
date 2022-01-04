const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: "development",
    entry: "./src/client/app.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        library: {
            name: 'client',
            type: "var"
        }
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/index.html",
            filename: "index.html"
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true, // Write Logs to Console
            verbose: false, // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true, protectWebpackAssets: false
        })
    ]
}
