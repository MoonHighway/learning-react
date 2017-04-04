var webpack = require("webpack")

process.noDeprecation = true

module.exports = {
    entry: "./index-client.js",
    output: {
        path: "assets",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'stage-0', 'react']
                }
            }
        ]
    }
}
