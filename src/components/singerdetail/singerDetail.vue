<template>
  <div class='singer-detail'>
  
  <musiclist :title='singer.fname' :avatar="singer.avatar"  :songs='songs' />
  </div>
</template>

<script>

import musiclist from '../../base/musiclist/musiclist'
import {getSongList} from '../../api/singer';

import  {mapGetters} from 'vuex'
import Song from '../../common/js/song'
  export default {
    data(){
      return {
        songs:[]
      }

    },
    methods: {
      _getSongList(){
        getSongList(this.singer.fid)
        .then(list=>{
          list.forEach(val=>{
            this.songs.push(new Song(val.musicData))

          })
        })
      }
    },
    created() {
      this._getSongList()
    },
    computed: {
      ...mapGetters(['getSingerInfo']),
      singer(){
        return this.getSingerInfo
      }
    },
    components:{
      musiclist
    }

  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/variable"
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
</style>