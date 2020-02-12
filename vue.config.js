module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('svg')

    config.module.rule('svg')
      .test(/\.svg$/)
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
  }
}
