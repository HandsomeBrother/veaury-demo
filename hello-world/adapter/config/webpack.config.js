const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    mode: 'development',
    entry: {
        index: ["./src/index.ts"]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        library: {
            type: 'umd',
        }
    },

    externals: {
        "react": 'react',
        "react-dom": 'react-dom',
        "vue": 'vue',
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: "/node_modules/",
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                 },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test: /\.(ts|js)x?$/,
            //     // ...
            //     loader: "babel-loader"
            // },
        ]
    },


    plugins: [
        new VueLoaderPlugin()
    ]
};