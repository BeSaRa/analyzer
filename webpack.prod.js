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
            }
        ]
    }
}
