<template>
  <div class="header">
    <router-link class="header-back" to="/">
      <span class="iconfont icon-fanhui"></span>
    </router-link>
    <span class="title">城市选择</span>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl'
  .header {
    position: relative;
    width: 100%;
    height: $headerHeight;
    line-height $headerHeight;
    text-align: center;
    background :$bgColor
    color: #fff;
    .header-back {
      position: absolute;
      top: 0;
      bottom:0;
      left: 0;
      width: .64rem;
      text-align: center;
      color: #fff;
    }
  }
</style>
