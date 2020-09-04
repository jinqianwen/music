import Vue from 'vue'
import VueRouter from 'vue-router'

import Rank from '@comp/rank/rank'
import Recommend from '@comp/recommend/recommend'
import Search from '@comp/search/search'
import Singer from '@comp/singer/singer'
import singerdeatil from '../components/singerdetail/singerDetail.vue'
import RecomDetail from '../components/recommend/recomDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children:[
      {
        path:":disid",
        component:RecomDetail
      }
    ]
    },
    {
      path: '/singer',
      component: Singer,
      children:[
        {
       
        path:':fid',
        component:singerdeatil
       }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
  ]
})