<template>
   <transition name="slide">
      <MusicList :title="diss.name" :avatar="diss.imgurl" :songs="songs"></MusicList>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import  MusicList from '../../base/musiclist/musiclist'
import recom from '../../api/recommend'
export default {
   data() {
    return {
      songs: []
    }
  },
    methods: {
    _getDissSongs(){
      // console.log(this.diss)
      recom.getDissSongs(this.diss.dissid).then(songs=>{
        this.songs = songs
         })
    }
  },
  created() {
    this._getDissSongs()
  },
  computed: {
    ...mapGetters(['getSingerInfo']),
    diss(){
      return this.getSingerInfo
    }
  },
  components: {
     MusicList
  }
}
</script>

<style scoped lang="stylus">
.slide-enter-active, .slide-leave-active
  transition all 0.3s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>