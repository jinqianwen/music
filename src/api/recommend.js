// 获取recommend推荐页的数据
// import reqData from '../common/js/myjsonp'
import axios from 'axios'
//获取轮播图
function getSlider(){
  // 请求地址
  const url = '/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  let data = {
    g_tk: 5381,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  }
  // 发送请求
  return axios({
    url: url
  }).then(data=>{
   return Promise.resolve(data.data.data.slider) 
  }).catch(err=>{
   return Promise.reject(err) 
  })

}

//获取歌单列表
function getDiss(){
   let url="/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg"
   let data={
    picmid: 1,
    rnd: Math.random(),
    g_tk_new_20200303: 5381,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq.json",
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 19
     }
     return axios.get( url,{
    
       params:data
     }).then(res=>{
      return Promise.resolve(res.data.data.list) 
     }).catch(err=>{
      return Promise.reject(err) 
     })
}
// 获取某个歌单里的歌曲列表
function getDissSongs(dissid){
  return axios.get("/getDiss",{
    params: {dissid}
  }).then(res=>{
    let list = res.data[0].songlist
    let data = []
    list.forEach(val=>{
      let {
        album:{name:albumname},
        singer,
        name: songname,
        mid
      } = val
      data.push({albumname,singer,songname,mid})
    })
    return Promise.resolve(data)
  }).catch(err=>{
    return Promise.reject(err)
  })
}

export default {
  getSlider,
  getDiss,
  getDissSongs
}
