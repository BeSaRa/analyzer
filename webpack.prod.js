const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'production',
    entry: './src/client/app.js',
    output: {
        library: {
            name: 'client',
            type: "var"
        }
    },
    module: {
        rules: [
            {
                test: /.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin()]
}
