// path模块
const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin =require('html-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // 入口
    entry:'./src/main.js',
    // 出口
    output:{
        path:path.resolve(__dirname,'../dist/'),
        filename:'bundle.js',
        // publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader 只负责加载 不负责解析生效
                // style-loader 负责解析生效样式
                // 使用多个loader时候 从右向左 顺序
                use: [ 'style-loader','css-loader' ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于的时候 使用base64编码图片
                            // 大于限制值的·时候需要file-loader加载
                            limit: 250000,
                            // 定义文件图片的名字和基础目录
                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                // 排除
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
            }
        ]
    },
    // 解决 路径文件名方面问题
    resolve: {
        // 别名
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions: ['.vue','.css','.js']
    },
    plugins: [
        // 版权
        new webpack.BannerPlugin("最终版权归属作者:mloine"),
        // html模版
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
        // // 简化js
        // new UglifyJsPlugin()
    ],
};