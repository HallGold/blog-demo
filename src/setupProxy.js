const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    /* 获取音乐 */
    proxy('/music', {
      target: 'https://api.imjad.cn/cloudmusic/',
      changeOrigin: true,
      pathRewrite: { '^/music': '' }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    /* 网易云官网API */
    proxy('/wyy', {
      target: 'https://autumnfish.cn/',
      changeOrigin: true,
      pathRewrite: { '^/wyy': '' }, //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    })
  )
}
