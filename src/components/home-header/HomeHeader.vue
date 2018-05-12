<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="header-input">
      <input type="text" class="search" placeholder="请输入要搜索的内容" />
    </div>
    <router-link to="/city" class="city-wrapper">
      <div class="header-right">
        {{city}}<span class="iconfont icon-jiantouarrow486"></span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapGetters([
      'city'
    ])
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';

.header {
  display: flex;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    flex: 0 0 0.64rem;
    text-align: center;

    .icon-fanhui {
      display: inline-block;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    border-radius: 0.1rem;
    color: #ccc;
    background: #fff;
    overflow: hidden;

    .search {
      width: 100%;
      height: 100%;
    }
  }

  .city-wrapper {
    min-width: 1.24rem;
    // flex: 0 0 1.24rem;
    padding-left: .1rem;

    .header-right {
      text-align: center;
      color: #fff;
    }
  }
}
</style>
