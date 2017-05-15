var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        index: './src/app.js',
    },
    //入口文件输出配置
    output: {
        path: path.resolve("./"),
        filename: 'js/[name].js?v=[hash]',
        chunkFilename: "js/[name].js?v=[hash]"
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: "url-loader?name=css/[name].[ext]"
            },
            {
                test: /\.html$/,
                loader: "html?attrs=img:src img:data-src"
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json'],
        root: [],
        alias: {
            'jquery': path.resolve('node_modules/jquery/dist/jquery.js')
        }
    },
    //插件项
    plugins: [
        new HtmlwebpackPlugin({
            filename:'index.html',
            template:'./src/view/home.html',
            chunks: ['index','common'],
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ // js压缩
            comments: false,
            mangle: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.JQuery': 'jquery',
            echarts: 'echarts'

        }),
        new ExtractTextPlugin("/css/styles.css?v=[hash]"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 3
        })
    ]
};