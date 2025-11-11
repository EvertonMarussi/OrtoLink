const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 👇 Adicione esta parte:
  publicPath: process.env.NODE_ENV === 'production'
    ? '/OrtoLink/' // substitua pelo nome exato do repositório no GitHub
    : '/'
})
