<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="header-input">
      <input type="text" class="search" placeholder="请输入要搜索的内容" />
    </div>
    <div class="header-right">
      城市<span class="iconfont icon-jiantouarrow486"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
.header {
  display: flex;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    flex: 0 0 0.64rem;
    text-align :center;
    .icon-fanhui {
      display: inline-block;
    }
  }

  .header-input {
    flex: 1;
    height: .64rem;
    line-height :.64rem;
    margin-top:.12rem;
    margin-left:.2rem;
    padding-left:.2rem;
    border-radius: .1rem;
    color: #ccc;
    background: #fff;
    overflow:hidden;
    .search{
      width :100%;
      height:100%;
    }
  }

  .header-right {
    // width :1.24rem;
    flex: 0 0 1.24rem;
    text-align: center;
  }
}
</style>
