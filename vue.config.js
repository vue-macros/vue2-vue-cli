const { defineConfig } = require('@vue/cli-service')

/** @type {typeof import("unplugin-vue-macros/webpack").default} */
const VueMacros = require('unplugin-vue-macros/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,

  parallel: false,
  configureWebpack: {
    plugins: [VueMacros()],
  },
})
