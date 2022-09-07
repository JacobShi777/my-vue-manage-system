const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  configureWebpack: (config) => {
    // 调试JS
    config.devtool = 'source-map'
  },
  lintOnSave: false // 暂时关闭代码格式检测
}
