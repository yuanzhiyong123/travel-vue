<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" placeholder="请输入拼音或字母" type="text">
    </div>
    <div class="search-con" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" @click="handleSelectCity(item)" v-for="(item, index) in searchList" :key="index">{{item}}</li>
        <li class="search-item border-bottom" v-show="hasList">没有匹配到~</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import {mapMutations} from 'vuex';
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      searchList: [],
      timer: null
    }
  },
  computed: {
    hasList() {
      return !this.searchList.length;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search, {
      click: true
    });
  },
  methods: {
    ...mapMutations({
      setCity: "SET_CITY"
    }),
    handleSelectCity(city) {
      this.setCity(city);
      this.$router.push("/");
      this.keyword = '';
    }
  },
  watch: {
    keyword() {
      if(this.timer) { // 函数防抖
        clearTimeout(this.timer);
      }
      if(!this.keyword) {
        this.searchList = [];
        return;
      }
      this.timer = setTimeout(() => {
        let list = [];
        for(let name in this.cities) {
          this.cities[name].forEach((item) => {
            if(item.name.indexOf(this.keyword) >= 0 || item.spell.indexOf(this.keyword) >= 0) {
              list.push(item.name);
            }
          });
        }
        this.searchList = list;
      }, 100);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: $bgColor;
  .search-input{
    width: 100%;
    height: 100%;
    padding-left: .1rem;
    box-sizing: border-box;
    border-radius: .1rem;
    text-align: center;
    color: #666;
  }
}
.search-con {
  overflow hidden;
  position absolute;
  top:1.78rem;
  bottom: 0;
  left: 0;
  right:0;
  background #eee;
  z-index 10;
  .search-item {
    line-height: .7rem;
    padding-left: .2rem;
    background #fff;
  }
}
</style>
