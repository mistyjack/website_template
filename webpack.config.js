const path = require("path");

module.exports = {
    entry: {
        App: path.join(__dirname, 'app', 'assets', 'scripts', 'App.js'),
        Vendor: path.join(__dirname, 'app', 'assets', 'scripts', 'Vendor.js')
    },

    output: {
        path: path.resolve(__dirname, path.join('app', 'temp', 'scripts')),
        filename: "[name].js"
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }

        ]
    },

    mode: "development"
}
























































// var path = require("path");

// module.exports = {
//     entry: {
//         App: path.join('app', 'assets', 'scripts', 'App.js'),
//         Vendor: path.join('app', 'assets', 'scripts', 'Vendor.js')
//     },
//     output: {
//         path: path.resolve(__dirname, path.join('app', 'temp', 'scripts')),
//         filename: "[name].js"
//     },
//     module: {
//         loaders: [
//             {
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 },
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             }
//         ]
//     }
// }