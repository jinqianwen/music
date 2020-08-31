<template>
  <div>
    <mheader />
     <tab />
     <!-- 路由渲染出口 -->
    <router-view></router-view>
  </div>
</template>
<script>
import mheader from './components/m-header/m-header'
import tab from './components/tab/tab'
export default {
  components:{
    mheader,
    tab
  }
}
</script>