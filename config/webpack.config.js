const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        index: ["./src/index.ts"]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        library: {
            type: 'amd',
        }
    },

    externals: {
        "react": 'react',
        "react-dom": 'react-dom',
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: "/node_modules/"
            }
            // {
            //     test: /\.(ts|js)x?$/,
            //     // ...
            //     loader: "babel-loader"
            // },
        ]
    },


    plugins: []
};