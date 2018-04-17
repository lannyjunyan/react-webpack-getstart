module.exports = {
    entry: __dirname + "/src/main.js",  // 唯一入口文件
    output: {                           // 输出目录
        path: __dirname + "/dist",      // 打包后的js文件存放的地方
        filename: "bundle.js"           // 打包后输出的js的文件名
    },
 
    module: {
        loaders: [ //loaders加载器
            {
                test: /\.(js|jsx)$/,    // 一个匹配loaders所处理的文件的拓展名的正则表达式, 这里用来匹配js和jsx文件(必须)
                exclude: /node_modules/,// 屏蔽不需要处理的文件(文件夹)(可选)
                loader: 'babel',        // loader的名称(必须)
                query: {
                    presets: ['es2015', 'react', 'stage-3'], // stage-3 for '...' operator
                    plugins: ["transform-runtime", "babel-plugin-transform-regenerator", "babel-plugin-transform-es2015-modules-commonjs"], // for async/await
                }
            }
        ]
    }
};
