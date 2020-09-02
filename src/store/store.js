import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    singerInfo:{},//歌手信息

  },
  getters:{
    getSingerInfo(state){
      //获取歌手信息
       return state.singerInfo
    }
  },
  mutations: {
    //修改歌手信息
    setSingerInfo(state,payload){
      state.singerInfo=payload.singer
    }
  },
  actions:{
  }
})