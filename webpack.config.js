
const path = require("path");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
       game: path.resolve(__dirname, 'src/index.ts'),
    } ,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets" }
            ],
          }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
};
