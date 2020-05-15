const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WebpackModules = require('webpack-modules')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry:{ 
        dist:'./src/entry.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js',
        publicPath: '/',
        libraryTarget: 'var',
        library: '[name]'
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@base': path.resolve(__dirname, 'src'),
            '@src': path.resolve(__dirname, 'src/assets')
          },
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [
            new CleanWebpackPlugin(),
            new WebpackModules(),
            new MiniCssExtractPlugin({
                filename: "css/main.css",
            })
        ],
        module: {
            rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        }
                    }
                ]
            },{
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader" 
                ],
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
            }, {
                test: /\.(png|svg|jpg|gif|webp)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                // use:[{
                //     loader: 'url-loader',
                //     options: {
                //         name: '[hash].[ext]',
                //         outputPath: 'assets',
                //     }
                // }]
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }],
        }
};