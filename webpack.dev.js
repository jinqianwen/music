// 开发环境
let {merge} = require('webpack-merge')
let base = require('./webpack.base')

module.exports = merge(base, {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: __dirname+'/dis',
    host: 'localhost',
    port: 4001,
    open: false,
    overlay: {
      errors: true
    },
    historyApiFallback:true,
    hot: true,
    proxy: [
      {//反向代理
     context: ["/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
              "/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg",
              "/v8/fcg-bin/v8.fcg",
              '/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
            ],
        target: "https://c.y.qq.com/",
        changeOrigin: true,
        headers:{
          referer:"https://c.y.qq.com/",
          host:'c.y.qq.com'
        }
    }
    ],
    before(app){//是基于express环境
      app.get('/singer/:id',(req,res)=>{
        res.redirect('/singer')
      })
    }
  }
})