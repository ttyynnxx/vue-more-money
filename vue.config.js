const path =require('path')

module.exports ={
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-money-website'
    : '/',
    lintOnSave: false,
    chainWebpack: config =>{
        const dir =path.resolve(__dirname,'src/assets/icons')

        config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end() // 包含icons目录
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
        // 以下注释的两行代码是用于当图标带有颜色时，用自定义的颜色覆盖图标自身的颜色，但加上这个运行会报错，图标加载不出来，应该与其他依赖包的版本有关，具体原因还在查找中...
        // .use('svgo-loader').loader('svgo-loader')
        // .tap(options =>({...options, plugins:[{removeAttrs:{attrs:'fill'}}]})).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir) // 其他 SVG loader 排除 icons 目录
    }
    
}